import { EVENTS_DATA } from '@/config/events.data';
import { useMemo, useState } from 'react';
import Modal from '../react-bits/Modal';
import CalendarItem from './CalendarItem';
import Selected from './Selected';

const CalendarGrid = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<string | null>(null);

  const handleEventClick = (eventTitle: string) => {
    setCurrentEvent(eventTitle);
    setIsOpen(true);
  };

  const eventDetails = useMemo(() => {
    return Object.values(EVENTS_DATA)
      .flat()
      .find(event => event.title === currentEvent);
  }, [currentEvent]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        className='bg-[#F0F4F9] md:min-w-xl dark:bg-[#1E1F20]'
        aria-label='Event modal'
      >
        <Selected event={eventDetails!} />
      </Modal>

      <div className='mt-8 grid grid-cols-2 items-center justify-center gap-2 md:grid-cols-3 lg:grid-cols-4'>
        {Object.entries(EVENTS_DATA).map(([month, events]) => (
          <CalendarItem
            key={month}
            month={month}
            events_data={events}
            handleEventClick={handleEventClick}
          />
        ))}
      </div>
    </>
  );
};

export default CalendarGrid;
