import React, { useState, useMemo } from 'react';

interface AnimatedTeamImageProps {
  src: string;
  alt: string;
  className?: string;
}

const AnimatedTeamImage: React.FC<AnimatedTeamImageProps> = ({
  src,
  alt,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Google-themed color overlay patterns
  const googleColorOverlay = useMemo(
    () => ({
      background: `
      radial-gradient(circle at 20% 30%, rgba(66, 133, 244, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(52, 168, 83, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 60% 80%, rgba(251, 188, 4, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 30% 70%, rgba(234, 67, 53, 0.3) 0%, transparent 50%)
    `,
    }),
    []
  );

  const patternOverlay = useMemo(
    () => ({
      background: `
      repeating-linear-gradient(
        45deg,
        rgba(66, 133, 244, 0.15) 0px,
        rgba(66, 133, 244, 0.15) 3px,
        transparent 3px,
        transparent 12px,
        rgba(52, 168, 83, 0.15) 12px,
        rgba(52, 168, 83, 0.15) 15px,
        transparent 15px,
        transparent 24px,
        rgba(251, 188, 4, 0.15) 24px,
        rgba(251, 188, 4, 0.15) 27px,
        transparent 27px,
        transparent 36px,
        rgba(234, 67, 53, 0.15) 36px,
        rgba(234, 67, 53, 0.15) 39px,
        transparent 39px,
        transparent 48px
      )
    `,
      imageRendering: 'pixelated' as const,
    }),
    []
  );

  return (
    <div
      className={`animated-team-image rounded-3xl relative overflow-hidden group cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base natural image - shows on hover */}
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full rouned-3xl object-cover object-center transition-all duration-500 ease-out ${
          isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
        }`}
        onLoad={() => setIsLoaded(true)}
        loading='lazy'
      />

      {/* Google-colored base image - shows initially */}
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full rounded-3xl object-cover object-center transition-all duration-500 ease-out ${
          isHovered ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
        }`}
        style={{
          filter: isHovered
            ? 'saturate(100%) contrast(100%) brightness(100%)'
            : 'saturate(150%) contrast(120%) brightness(110%) hue-rotate(10deg)',
          imageRendering: 'pixelated',
        }}
        loading='lazy'
      />

      {/* Google color overlay - only shows when not hovered */}
      {!isHovered && (
        <div
          className='absolute inset-0 transition-opacity duration-500 ease-out pointer-events-none opacity-40 dark:opacity-50 mix-blend-overlay'
          style={googleColorOverlay}
        />
      )}

      {/* Google-themed pattern overlay - only shows when not hovered */}
      {!isHovered && (
        <div
          className='absolute inset-0 transition-opacity duration-300 ease-out pointer-events-none opacity-25 dark:opacity-35'
          style={patternOverlay}
        />
      )}

      {/* Subtle Google-themed dither effect */}
      <div
        className={`absolute inset-0 transition-all duration-400 ease-out pointer-events-none ${
          isHovered ? 'opacity-0' : 'opacity-20 dark:opacity-25'
        }`}
        style={{
          background: `
            repeating-conic-gradient(from 0deg at 50% 50%,
              rgba(66, 133, 244, 0.2) 0deg,
              rgba(52, 168, 83, 0.2) 90deg,
              rgba(251, 188, 4, 0.2) 180deg,
              rgba(234, 67, 53, 0.2) 270deg
            )
          `,
          backgroundSize: '16px 16px',
          imageRendering: 'pixelated',
        }}
      />

      {/* Vibrant enhancement overlay for initial state */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ease-out pointer-events-none ${
          isHovered ? 'opacity-0' : 'opacity-30 dark:opacity-40'
        }`}
        style={{
          background: `
            linear-gradient(135deg,
              rgba(66, 133, 244, 0.1) 0%,
              rgba(52, 168, 83, 0.1) 25%,
              rgba(251, 188, 4, 0.1) 50%,
              rgba(234, 67, 53, 0.1) 75%,
              rgba(66, 133, 244, 0.1) 100%
            )
          `,
          mixBlendMode: 'color-dodge',
        }}
      />

      {!isLoaded && (
        <div className='absolute inset-0 bg-gradient-to-br from-gdgoc-primary-blue/20 via-gdgoc-primary-green/20 to-gdgoc-primary-yellow/20 animate-pulse' />
      )}

      {/* Subtle gradient overlay for depth */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/20 dark:from-black/30 via-transparent to-transparent pointer-events-none z-10' />
    </div>
  );
};

export default AnimatedTeamImage;
