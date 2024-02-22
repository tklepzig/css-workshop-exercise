import { cx } from "class-variance-authority";

export const Index = () => (
  <div className="flex flex-col">
    <ul className="m-auto h-[10rem] w-1/3 overflow-auto">
      {Array.from({ length: 10 }).map((_, i) => (
        // eslint-disable-next-line react/jsx-key
        <li
          className={cx(
            "bg-ui-0 p-2 odd:bg-ui-100",
            !i && "sticky top-0 bg-ui-0"
          )}
        >
          Item {i}
        </li>
      ))}
    </ul>
    <div className="size-[400px]">
      <div className="m-auto size-[100px] bg-ui-300">100 x 100px</div>
    </div>
  </div>
);
