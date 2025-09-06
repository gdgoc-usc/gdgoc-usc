import { MapPin } from 'lucide-react';
import Item from './Item';

const CalendarItem = ({
  title,
  date,
  descriptions,
  location,
  category,
}: {
  title: string;
  date: Date;
  descriptions: string[];
  location: string;
  category: string;
}) => {
  const categoryColors = {
    web: 'bg-blue-400 dark:bg-blue-500',
    ds: 'bg-green-400 dark:bg-green-500',
    'ai/ml': 'bg-red-400 dark:bg-red-500',
    org: 'bg-yellow-400 dark:bg-yellow-500',
    tech: 'bg-indigo-400 dark:bg-indigo-500',
    default: 'bg-gray-400 dark:bg-gray-500',
  };

  function getMonthAndDay(date: Date) {
    const d = new Date(date);
    const monthNames = [
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUN',
      'JUL',
      'AUG',
      'SEP',
      'OCT',
      'NOV',
      'DEC',
    ];
    return [monthNames[d.getMonth()], d.getDate().toString()];
  }

  const [month, day] = getMonthAndDay(date);

  return (
    <div className='timeline-card flex size-[360px] flex-col items-start justify-start rounded-md bg-white py-4 transition-transform duration-200 dark:bg-[#131314]'>
      <div className='flex w-full flex-col items-center justify-center text-center'>
        <span>{month}</span>
        <span className='font-extrabold'>{day}</span>
      </div>

      <div className='w-full'>
        <a
          href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${date.toISOString().replace(/-|:|\.\d+/g, '')}/${date.toISOString().replace(/-|:|\.\d+/g, '')}&details=${encodeURIComponent(descriptions.join(' '))}&location=${encodeURIComponent(location)}`}
          className={`mt-4 flex h-20 w-[95%] -translate-x-1 rounded-md ${categoryColors[category as keyof typeof categoryColors] ?? categoryColors.default} items-center border-l-4 border-blue-500 px-2 py-1 pl-4 text-xl font-extrabold text-white transition-all duration-300 ease-in-out hover:opacity-80`}
          target='_blank'
        >
          {title}
        </a>
        <ul className='w-full p-4'>
          <Item color='bg-gdgoc-primary-yellow'>{descriptions[0]}</Item>
          <Item color='bg-gdgoc-primary-blue'>{descriptions[1]}</Item>
          <Item color='bg-gdgoc-primary-red'>
            <MapPin className='size-4' />
            {location}
          </Item>
        </ul>
      </div>
    </div>
  );
};

export default CalendarItem;
