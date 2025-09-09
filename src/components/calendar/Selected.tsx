import type { EventType } from '@/config/events.data';
import { categoryColors } from '@/config/events.data';
import { ExternalLink, MapPin } from 'lucide-react';

function formatDateToLongString(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
}

const Selected = ({ event }: { event: EventType }) => {
  return (
    <div className='flex h-full w-full flex-col'>
      <div className='flex w-full gap-4'>
        <div className='w-full flex-1'>
          <div
            className={`m-2 size-4 rounded-md ${categoryColors[event.category]}`}
          />
        </div>
        <div className='w-full'>
          <h2 className='text-lg font-bold'>{event.title}</h2>
          <p className='text-sm'>{formatDateToLongString(event.date)}</p>
        </div>
      </div>
      <p className='mt-4 w-full pl-12 text-sm'>{event.description}</p>
      <div className='mt-4 flex w-full items-center gap-4'>
        <div className='w-full flex-1'>
          <MapPin className='m-2 size-5' />
        </div>
        <p className='w-full text-sm'>{event.location}</p>
      </div>

      <div className='mt-2 flex w-full items-center gap-4'>
        <div className='w-full flex-1'>
          <svg
            viewBox='0 0 150 150'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='m-1 size-7'
          >
            {/* Center white area */}
            <rect x='49.8' y='49.8' width='50.4' height='50.4' fill='#fff' />
            <polygon
              fill='#1E88E5'
              points='79.2,67.2 81.8,70.9 85.8,68 85.8,89 90.1,89 90.1,61.4 86.5,61.4'
            />
            <path
              fill='#1E88E5'
              d='M72.3,74.4c1.6-1.4,2.6-3.5,2.6-5.7c0-4.4-3.9-8-8.6-8c-4,0-7.5,2.5-8.4,6.2l4.2,1.1c0.4-1.7,2.2-2.9,4.2-2.9
      c2.4,0,4.3,1.6,4.3,3.6c0,2-1.9,3.6-4.3,3.6h-2.5v4.4h2.5c2.7,0,5,1.9,5,4.1c0,2.3-2.2,4.1-4.9,4.1c-2.4,0-4.5-1.5-4.8-3.6
      l-4.2,0.7c0.7,4.1,4.6,7.2,9.1,7.2c5.1,0,9.2-3.8,9.2-8.5C75.6,78.2,74.3,75.9,72.3,74.4z'
            />
            <polygon
              fill='#FBC02D'
              points='100.2,120.3 49.8,120.3 49.8,100.2 100.2,100.2'
            />
            <polygon
              fill='#4CAF50'
              points='120.3,100.2 120.3,49.8 100.2,49.8 100.2,100.2'
            />
            <path
              fill='#1E88E5'
              d='M100.2,49.8V29.7h-63c-4.2,0-7.6,3.4-7.6,7.6v63h20.1V49.8H100.2z'
            />
            <polygon
              fill='#E53935'
              points='100.2,100.2 100.2,120.3 120.3,100.2'
            />
            <path
              fill='#1565C0'
              d='M112.8,29.7h-12.6v20.1h20.1V37.2C120.3,33,117,29.7,112.8,29.7z'
            />
            <path
              fill='#1565C0'
              d='M37.2,120.3h12.6v-20.1H29.7v12.6C29.7,117,33,120.3,37.2,120.3z'
            />
          </svg>
        </div>
        <div className='w-full'>
          <a
            href='#'
            className='hover:text-gdgoc-primary-yellow text-sm hover:underline'
          >
            Add to Calendar
          </a>
        </div>
      </div>

      {event.link && (
        <div className='mt-2 flex w-full items-center gap-4'>
          <div className='w-full flex-1'>
            <ExternalLink className='m-2 size-5' />
          </div>
          <div className='w-full'>
            <a
              href={event.link}
              className='hover:text-gdgoc-primary-blue text-sm hover:underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              Learn More
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Selected;
