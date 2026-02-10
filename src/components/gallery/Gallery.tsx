import React, { useEffect, useState } from 'react';
import { fetchEventImages } from '@/utils/github';
import Masonry from './Masonry';
import Lightbox from './Lightbox';

interface GalleryProps {
  event_slug: string;
}

const Gallery: React.FC<GalleryProps> = ({ event_slug }) => {
  const [images, setImages] = useState<any[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    fetchEventImages(event_slug).then(urls => {
      setImages(urls);
    });
  }, [event_slug]);

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      <div className='mx-auto mt-8 w-full max-w-7xl px-4'>
        <Masonry
          items={images}
          onImageClick={(index: number) => setSelectedIndex(index)}
        />
      </div>

      {selectedIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onPrev={() =>
            setSelectedIndex(prev =>
              prev! > 0 ? prev! - 1 : images.length - 1
            )
          }
          onNext={() =>
            setSelectedIndex(prev =>
              prev! < images.length - 1 ? prev! + 1 : 0
            )
          }
        />
      )}
    </>
  );
};

export default Gallery;
