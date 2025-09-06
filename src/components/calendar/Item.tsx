const Item = ({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) => {
  return (
    <li className='flex items-center gap-4 rounded-lg p-1 px-2 transition-all duration-300 ease-in-out hover:bg-black/30'>
      <div
        className={`${color} relative aspect-square h-4 w-4 rounded-full`}
      ></div>
      <div className='flex items-center gap-2'>{children}</div>
    </li>
  );
};

export default Item;
