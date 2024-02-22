export const Index = () => (
  <div className="h-[10rem] w-1/3 overflow-auto">
    <ul className="[&>li:nth-child(4)]:sticky [&>li:nth-child(4)]:top-0">
      {Array.from({ length: 10 }).map((_, i) => (
        // eslint-disable-next-line react/jsx-key
        <li className="bg-ui-200 p-2 even:bg-ui-100">Item {i}</li>
      ))}
    </ul>
  </div>
);
