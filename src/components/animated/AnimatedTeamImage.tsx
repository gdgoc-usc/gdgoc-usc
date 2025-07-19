import React, { useState } from 'react';

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

  return (
    <div
      className={`animated-team-image relative overflow-hidden group cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-[800ms] ease-out ${
          isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
        }`}
        onLoad={() => setIsLoaded(true)}
        loading='lazy'
      />

      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-[800ms] ease-out ${
          isHovered ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
        }`}
        style={{
          filter: `
            grayscale(${isHovered ? '100%' : '85%'}) 
            contrast(${isHovered ? '130%' : '120%'}) 
            brightness(${isHovered ? '70%' : '95%'}) 
            sepia(${isHovered ? '30%' : '25%'}) 
            hue-rotate(${isHovered ? '180deg' : '200deg'}) 
            saturate(${isHovered ? '40%' : '100%'})
            ${isHovered ? 'blur(3px)' : ''}
          `,
          imageRendering: 'pixelated',
        }}
        loading='lazy'
      />

      <div
        className={`absolute inset-0 transition-all duration-500 ease-out pointer-events-none mix-blend-hard-light ${
          isHovered
            ? 'opacity-0 scale-110'
            : 'opacity-40 dark:opacity-60 scale-100'
        }`}
        style={{
          background: `
            repeating-conic-gradient(from 0deg at 50% 50%, 
              rgba(66, 133, 244, 0.2) 0deg, 
              transparent 45deg, 
              rgba(52, 168, 83, 0.2) 90deg, 
              transparent 135deg,
              rgba(251, 188, 4, 0.2) 180deg,
              transparent 225deg,
              rgba(234, 67, 53, 0.2) 270deg,
              transparent 315deg
            ),
            repeating-linear-gradient(
              0deg,
              rgba(66, 133, 244, 0.1) 0px,
              transparent 3px,
              transparent 6px,
              rgba(52, 168, 83, 0.1) 9px,
              transparent 12px,
              transparent 15px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(251, 188, 4, 0.1) 0px,
              transparent 3px,
              transparent 6px,
              rgba(234, 67, 53, 0.1) 9px,
              transparent 12px,
              transparent 15px
            )
          `,
          backgroundSize: '24px 24px, 12px 12px, 12px 12px',
          imageRendering: 'pixelated',
        }}
      />

      {/* Stronger dithering pattern overlay */}
      <div
        className={`absolute inset-0 mix-blend-multiply transition-all duration-700 ease-out ${
          isHovered
            ? 'opacity-0 scale-105'
            : 'opacity-30 dark:opacity-50 scale-100'
        }`}
        style={{
          background: `
            repeating-conic-gradient(from 45deg at 25% 25%, 
              rgba(255,255,255,0.6) 0deg, 
              rgba(0,0,0,0.4) 90deg,
              rgba(255,255,255,0.6) 180deg,
              rgba(0,0,0,0.4) 270deg
            ),
            repeating-conic-gradient(from 45deg at 75% 75%, 
              rgba(0,0,0,0.4) 0deg, 
              rgba(255,255,255,0.6) 90deg,
              rgba(0,0,0,0.4) 180deg,
              rgba(255,255,255,0.6) 270deg
            )
          `,
          backgroundSize: '8px 8px, 8px 8px',
          backgroundPosition: '0 0, 4px 4px',
          imageRendering: 'pixelated',
        }}
      />

      {/* Chunky pixel noise texture */}
      <div
        className={`absolute inset-0 mix-blend-overlay transition-all duration-600 ${
          isHovered ? 'opacity-0' : 'opacity-25 dark:opacity-40'
        }`}
        style={{
          background: `
            repeating-linear-gradient(
              0deg,
              rgba(66, 133, 244, 0.2) 0px,
              rgba(66, 133, 244, 0.2) 2px,
              transparent 2px,
              transparent 4px,
              rgba(52, 168, 83, 0.2) 4px,
              rgba(52, 168, 83, 0.2) 6px,
              transparent 6px,
              transparent 8px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(251, 188, 4, 0.2) 0px,
              rgba(251, 188, 4, 0.2) 2px,
              transparent 2px,
              transparent 4px,
              rgba(234, 67, 53, 0.2) 4px,
              rgba(234, 67, 53, 0.2) 6px,
              transparent 6px,
              transparent 8px
            )
          `,
          imageRendering: 'pixelated',
          animation: isHovered
            ? 'none'
            : 'pixel-shift 3s ease-in-out infinite alternate',
        }}
      />

      {!isLoaded && (
        <div className='absolute inset-0 bg-gradient-to-br from-gdgoc-primary-blue/10 to-gdgoc-secondary-blue/10 animate-pulse' />
      )}

      <div className='absolute inset-0 bg-gradient-to-t from-black/30 dark:from-black/50 via-black/5 dark:via-black/10 to-transparent pointer-events-none z-10' />
    </div>
  );
};

export default AnimatedTeamImage;
