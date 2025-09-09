import Event from './Event';

import type { EventType } from '@/config/events.data';

function isCurrentMonth(month: string): boolean {
  const now = new Date();
  const currentMonthShort = now
    .toLocaleString('en-US', { month: 'short' })
    .toLowerCase();
  return month.toLowerCase() === currentMonthShort;
}

export default function Month({
  month,
  events_data,
  handleEventClick,
}: {
  month: string;
  events_data: EventType[];
  handleEventClick?: (arg: string) => void;
}) {
  return (
    <div className='size-[180px] h-full min-h-[180px] bg-white py-2 sm:size-[230px] xl:size-[280px] dark:bg-[#131314]'>
      <div className='mb-2 flex w-full justify-center text-black dark:text-white'>
        <h2
          className={`px-2 text-center text-sm ${isCurrentMonth(month) ? 'rounded-full bg-[#0B57D0] text-white dark:bg-[#A8C7FA] dark:text-black' : ''} sm:text-base`}
        >
          {month.toUpperCase()}
        </h2>
      </div>
      <div className='h-full w-full space-y-2'>
        {events_data.map((eventItem, i) => (
          <Event
            key={i}
            event={eventItem}
            onClick={() => handleEventClick?.(eventItem.title)}
          />
        ))}
      </div>
    </div>
  );
}
