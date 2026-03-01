import { useCallback, useEffect, useRef, useState } from 'react';
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hasOverflow, setHasOverflow] = useState(false);

  const checkOverflow = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const isOverflowing = el.scrollHeight > el.clientHeight;
    const isAtBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 8;
    setHasOverflow(isOverflowing && !isAtBottom);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkOverflow();

    el.addEventListener('scroll', checkOverflow);
    const observer = new ResizeObserver(checkOverflow);
    observer.observe(el);

    return () => {
      el.removeEventListener('scroll', checkOverflow);
      observer.disconnect();
    };
  }, [checkOverflow, events_data]);

  return (
    <div className='size-[180px] h-full min-h-[180px] bg-white py-2 sm:size-[230px] xl:size-[280px] dark:bg-[#131314]'>
      <div className='mb-2 flex w-full justify-center text-black dark:text-white'>
        <h2
          className={`px-2 text-center text-sm ${isCurrentMonth(month) ? 'rounded-full bg-[#0B57D0] text-white dark:bg-[#A8C7FA] dark:text-black' : ''} sm:text-base`}
        >
          {month.toUpperCase()}
        </h2>
      </div>

      {/* Scrollable events with fade-out bottom mask */}
      <div className='relative' style={{ height: 'calc(100% - 2rem)' }}>
        <div
          ref={scrollRef}
          className='scrollbar-none h-full space-y-2 overflow-y-auto pb-4'
          style={{
            maskImage:
              'linear-gradient(to bottom, black 60%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black 60%, transparent 100%)',
          }}
        >
          {events_data.map((eventItem, i) => (
            <Event
              key={i}
              event={eventItem}
              onClick={() => handleEventClick?.(eventItem.title)}
            />
          ))}
        </div>

        {/* "See more" indicator when events overflow */}
        {hasOverflow && (
          <div className='pointer-events-none absolute right-0 bottom-0 left-0 pb-1 text-center'>
            <span className='text-xs font-medium text-gray-400 dark:text-gray-500'>
              See more ↓
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
