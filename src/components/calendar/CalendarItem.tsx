import Event from './Event';

import type { EventType } from '@/config/events.data';

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
      <h2 className='mb-2 w-full pb-2 text-center text-sm text-black dark:text-white'>
        {month.toUpperCase()}
      </h2>
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
