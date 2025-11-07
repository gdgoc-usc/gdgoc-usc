import { EVENTS_DATA } from '@/config/events.data';
import React, { useState } from 'react';
import AlbumItem from './AlbumItem.tsx';

const AlbumGrid = () => {
  const allEvents = Object.values(EVENTS_DATA).flat();

  return (
    <>
      <h1 className='mb-4 text-4xl font-bold tracking-tighter text-black md:text-6xl dark:text-white'>
        Events Album
      </h1>
      <div className='mx-auto mt-8 grid max-w-240 grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {allEvents.map(
          (event, i) =>
            event.location !== 'TBA' && (
              <AlbumItem
                key={i}
                slug={event.slug}
                src={event.pubmat}
                alt={event.title}
              />
            )
        )}
      </div>
    </>
  );
};

export default AlbumGrid;
