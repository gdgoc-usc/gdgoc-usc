import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface AnimatedSVGBackgroundProps {
  className?: string;
}

export default function AnimatedSVGBackground({ className = "" }: AnimatedSVGBackgroundProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  useEffect(() => {
    const animationsDisabled = localStorage.getItem('animations-enabled') === 'false';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    setAnimationsEnabled(!animationsDisabled && !prefersReducedMotion);
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;

    if (!animationsEnabled) {
      // When animations are disabled, show all lines immediately
      const lines = svgRef.current.querySelectorAll('#geometric-patterns line');
      const paths = svgRef.current.querySelectorAll('#geometric-patterns path');
      
      // Set all elements to be fully visible
      gsap.set([...lines, ...paths], {
        drawSVG: "100%"
      });
      return;
    }

    const initAnimation = async () => {
      try {
        const { DrawSVGPlugin } = await import('gsap/DrawSVGPlugin');
        gsap.registerPlugin(DrawSVGPlugin);
        
        if (!svgRef.current) return;
        
        const lines = svgRef.current.querySelectorAll('#geometric-patterns line');
        const paths = svgRef.current.querySelectorAll('#geometric-patterns path');
        
        gsap.set([...lines, ...paths], {
          drawSVG: "0%"
        });
        
        const tl = gsap.timeline({
          delay: 0.5,
          ease: "power2.out"
        });
        
        lines.forEach((line, index) => {
          tl.to(line, {
            drawSVG: "100%",
            duration: 1.5,
            ease: "power2.out"
          }, index * 0.1);
        });
        
        // Animate vertical lines from top to bottom
        const vlines = svgRef.current!.querySelectorAll('[id^="vline"]');
        vlines.forEach((line, index) => {
          tl.to(line, {
            drawSVG: "100%",
            duration: 1.2,
            ease: "power2.out"
          }, index * 0.08);
        });
        
        // Animate diagonal lines
        const dlines = svgRef.current!.querySelectorAll('[id^="dline"]');
        dlines.forEach((line, index) => {
          tl.to(line, {
            drawSVG: "100%",
            duration: 1.8,
            ease: "power2.out"
          }, index * 0.12);
        });
        
        // Animate curved paths
        paths.forEach((path, index) => {
          tl.to(path, {
            drawSVG: "100%",
            duration: 2.2,
            ease: "power2.out"
          }, index * 0.15);
        });
      } catch (error) {
        console.error('Failed to load DrawSVGPlugin:', error);
      }
    };

    initAnimation();
  }, [animationsEnabled]);

  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <svg 
        ref={svgRef}
        id="animated-bg" 
        className="w-full h-full object-cover" 
        viewBox="0 0 1200 800" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#4285f4", stopOpacity: 0.1 }} />
            <stop offset="50%" style={{ stopColor: "#34a853", stopOpacity: 0.05 }} />
            <stop offset="100%" style={{ stopColor: "#4285f4", stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#bgGradient)" />
        
        <g 
          id="geometric-patterns" 
          stroke="#bfe0c8" 
          strokeWidth="2" 
          fill="none" 
          opacity="0.3"
          style={!animationsEnabled ? { 
            strokeDasharray: 'none',
            strokeDashoffset: '0'
          } : {}}
        >
          {/* Horizontal lines */}
          <line id="line1" x1="0" y1="100" x2="1200" y2="100" />
          <line id="line2" x1="0" y1="200" x2="1200" y2="200" />
          <line id="line3" x1="0" y1="300" x2="1200" y2="300" />
          <line id="line4" x1="0" y1="400" x2="1200" y2="400" />
          <line id="line5" x1="0" y1="500" x2="1200" y2="500" />
          <line id="line6" x1="0" y1="600" x2="1200" y2="600" />
          <line id="line7" x1="0" y1="700" x2="1200" y2="700" />
          
          {/* Vertical lines */}
          <line id="vline1" x1="100" y1="0" x2="100" y2="800" />
          <line id="vline2" x1="200" y1="0" x2="200" y2="800" />
          <line id="vline3" x1="300" y1="0" x2="300" y2="800" />
          <line id="vline4" x1="400" y1="0" x2="400" y2="800" />
          <line id="vline5" x1="500" y1="0" x2="500" y2="800" />
          <line id="vline6" x1="600" y1="0" x2="600" y2="800" />
          <line id="vline7" x1="700" y1="0" x2="700" y2="800" />
          <line id="vline8" x1="800" y1="0" x2="800" y2="800" />
          <line id="vline9" x1="900" y1="0" x2="900" y2="800" />
          <line id="vline10" x1="1000" y1="0" x2="1000" y2="800" />
          <line id="vline11" x1="1100" y1="0" x2="1100" y2="800" />
          
          {/* Diagonal lines */}
          <line id="dline1" x1="0" y1="0" x2="200" y2="200" />
          <line id="dline2" x1="200" y1="0" x2="400" y2="200" />
          <line id="dline3" x1="400" y1="0" x2="600" y2="200" />
          <line id="dline4" x1="600" y1="0" x2="800" y2="200" />
          <line id="dline5" x1="800" y1="0" x2="1000" y2="200" />
          <line id="dline6" x1="1000" y1="0" x2="1200" y2="200" />
          
          {/* Curved paths */}
          <path id="curve1" d="M 0 400 Q 300 200 600 400 T 1200 400" />
          <path id="curve2" d="M 0 600 Q 300 400 600 600 T 1200 600" />
          <path id="curve3" d="M 0 200 Q 300 0 600 200 T 1200 200" />
        </g>
      </svg>
    </div>
  );
} 