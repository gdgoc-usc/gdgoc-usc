import { categoryColors } from '@/config/events.data';

type EventProps = {
  event: {
    title: string;
    category: string;
  };
  onClick?: () => void;
};

export default function Event({ event, onClick }: EventProps) {
  const color =
    categoryColors[event.category as keyof typeof categoryColors] ??
    categoryColors.default;

  return (
    <div
      onClick={onClick}
      className={`flex w-[95%] -translate-x-1 cursor-pointer rounded-md ${color} items-center border-l-4 border-blue-500 px-2 py-1 pl-4 text-sm font-extrabold text-white transition-all duration-300 ease-in-out hover:opacity-80 xl:text-lg`}
    >
      {event.title}
    </div>
  );
}
