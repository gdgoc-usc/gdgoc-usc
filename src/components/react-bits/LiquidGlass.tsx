import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

const LiquidGlassMaterial = shaderMaterial(
  {
    uTime: 0,
    uScrollProgress: 0,
    uResolution: new THREE.Vector2(1, 1),
    uBackgroundTexture: null,
    uDistortionStrength: 0.1,
    uChromaticAberration: 0.005,
    uRefractionIndex: 1.45,
    uGlassThickness: 0.1,
  },
  // Vertex shader
  `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec3 vViewPosition;
    
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vPosition = position;
      
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  // Fragment shader
  `
    uniform float uTime;
    uniform float uScrollProgress;
    uniform vec2 uResolution;
    uniform sampler2D uBackgroundTexture;
    uniform float uDistortionStrength;
    uniform float uChromaticAberration;
    uniform float uRefractionIndex;
    uniform float uGlassThickness;
    
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec3 vViewPosition;
    
    // Signed distance function for rounded rectangle
    float sdRoundedBox(vec2 p, vec2 b, float r) {
      vec2 q = abs(p) - b + r;
      return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
    }
    
    // Calculate normal from SDF gradient
    vec3 calculateNormal(vec2 p) {
      vec2 e = vec2(0.001, 0.0);
      float d = sdRoundedBox(p, vec2(0.4, 0.15), 0.05);
      
      float dx = sdRoundedBox(p + e.xy, vec2(0.4, 0.15), 0.05) - d;
      float dy = sdRoundedBox(p + e.yx, vec2(0.4, 0.15), 0.05) - d;
      
      vec3 normal = normalize(vec3(dx, dy, sqrt(1.0 - min(1.0, dx*dx + dy*dy))));
      return normal;
    }
    
    // Fresnel reflection calculation
    float fresnel(vec3 incident, vec3 normal, float ior) {
      float cosi = clamp(dot(incident, normal), -1.0, 1.0);
      float etai = 1.0, etat = ior;
      
      if (cosi > 0.0) {
        float temp = etai;
        etai = etat;
        etat = temp;
      }
      
      float sint = etai / etat * sqrt(max(0.0, 1.0 - cosi * cosi));
      
      if (sint >= 1.0) {
        return 1.0; // Total internal reflection
      }
      
      float cost = sqrt(max(0.0, 1.0 - sint * sint));
      cosi = abs(cosi);
      
      float rs = ((etat * cosi) - (etai * cost)) / ((etat * cosi) + (etai * cost));
      float rp = ((etai * cosi) - (etat * cost)) / ((etai * cosi) + (etat * cost));
      
      return (rs * rs + rp * rp) / 2.0;
    }
    
    void main() {
      vec2 centeredUv = (vUv - 0.5) * 2.0;
      vec2 screenUv = gl_FragCoord.xy / uResolution;
      
      // Calculate distance to glass shape
      float dist = sdRoundedBox(centeredUv, vec2(0.4, 0.15), 0.05);
      
      // Discard pixels outside glass shape
      if (dist > 0.0) discard;
      
      // Calculate surface normal
      vec3 normal = calculateNormal(centeredUv);
      
      // Calculate view direction
      vec3 viewDir = normalize(vViewPosition);
      
      // Calculate refraction
      vec3 refractedDir = refract(viewDir, normal, 1.0 / uRefractionIndex);
      
      // Add subtle wave distortion
      vec2 wave = vec2(
        sin(centeredUv.x * 10.0 + uTime * 2.0) * 0.01,
        cos(centeredUv.y * 8.0 + uTime * 1.5) * 0.01
      ) * uScrollProgress;
      
      // Calculate refracted UV coordinates
      vec2 refractedUv = screenUv + refractedDir.xy * uDistortionStrength * uScrollProgress + wave;
      
      // Chromatic aberration
      float aberration = uChromaticAberration * uScrollProgress;
      float r = texture2D(uBackgroundTexture, refractedUv + vec2(aberration, 0.0)).r;
      float g = texture2D(uBackgroundTexture, refractedUv).g;
      float b = texture2D(uBackgroundTexture, refractedUv - vec2(aberration, 0.0)).b;
      
      vec3 refractedColor = vec3(r, g, b);
      
      // Calculate reflection
      vec3 reflectedDir = reflect(viewDir, normal);
      vec3 reflectedColor = vec3(0.2, 0.3, 0.4) * 0.5; // Sky color approximation
      
      // Fresnel factor
      float fresnelFactor = fresnel(viewDir, normal, uRefractionIndex);
      
      // Mix refraction and reflection
      vec3 finalColor = mix(refractedColor, reflectedColor, fresnelFactor * 0.3);
      
      // Add glass tint and enhance saturation
      finalColor = mix(finalColor, finalColor * 1.2, 0.3 * uScrollProgress);
      
      // Add edge highlight
      float edgeGlow = smoothstep(-0.02, 0.0, dist);
      finalColor += vec3(1.0) * edgeGlow * 0.3 * uScrollProgress;
      
      // Add subtle internal reflections
      float internalReflection = pow(1.0 - abs(dot(normal, viewDir)), 3.0);
      finalColor += vec3(0.8, 0.9, 1.0) * internalReflection * 0.2 * uScrollProgress;
      
      gl_FragColor = vec4(finalColor, 0.95 * uScrollProgress);
    }
  `
);

// Component that uses the shader
function LiquidGlassPlane({ scrollProgress }: { scrollProgress: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport, gl } = useThree();

  // Create render target for background
  const renderTarget = useMemo(() => {
    return new THREE.WebGLRenderTarget(
      gl.domElement.width,
      gl.domElement.height
    );
  }, [gl]);

  useFrame(state => {
    if (meshRef.current) {
      const material = meshRef.current.material as any;
      material.uniforms.uTime.value = state.clock.elapsedTime;
      material.uniforms.uScrollProgress.value = scrollProgress;
      material.uniforms.uResolution.value.set(
        gl.domElement.width,
        gl.domElement.height
      );
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <primitive object={new LiquidGlassMaterial()} />
    </mesh>
  );
}

// Main component
interface LiquidGlassProps {
  scrollProgress: number;
  className?: string;
}

export default function LiquidGlass({
  scrollProgress,
  className,
}: LiquidGlassProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas>
        <LiquidGlassPlane scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}
