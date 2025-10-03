import React, { useState, useEffect } from 'react';

interface AlbumItemProps {
  src: string;
  slug: string;
  alt?: string;
  className?: string;
}

const AlbumItem: React.FC<AlbumItemProps> = ({ src, slug, alt, className }) => {
  const [imageloaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Will fix this in the future since the onLoad and onError is not working properly
  const handleImageLoad = () => {
    alert('✅ onLoad fired');
    setImageLoaded(true);
  };

  const handleImageError = () => {
    alert('✅ onError fired');
    setImageError(true);
  };
  return (
    <div
      className={`relative aspect-square w-80 rounded-md border border-black dark:border-white ${className ?? ''}`}
    >
      {!imageloaded && !imageError && (
        <div className='absolute inset-0 z-10 flex items-center justify-center bg-gray-300'>
          Coming soon
        </div>
      )}

      <a
        href={`/gallery/${slug}`}
        className='absolute inset-0 z-20 cursor-pointer'
      >
        <img
          src={src}
          alt={alt}
          onError={handleImageError}
          onLoad={handleImageLoad}
          className={`h-full w-full object-cover ${src !== '/events/not-aired.png' ? 'opacity-100' : 'opacity-0'}`}
        />
      </a>
    </div>
  );
};

export default AlbumItem;
