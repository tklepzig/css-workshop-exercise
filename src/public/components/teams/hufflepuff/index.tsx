import { cx } from "class-variance-authority";

export const Index = () => (
  <div>
    <div className="p-2">
      <ul className="h-[10rem] w-1/3 overflow-auto border-[1px]">
        {Array.from({ length: 10 }).map((_, i) => (
          // eslint-disable-next-line react/jsx-key
          <li
            className={cx(
              "px-1 py-3",
              "even:bg-ui-100",
              i === 3 && "sticky top-0"
            )}
          >
            Item {i}
          </li>
        ))}
      </ul>
    </div>
    <div className="size-[400px] border-[1px] p-[150px]">
      <div className="size-[100px] border-[1px]">100 x 100px</div>
    </div>
    <div>
      <div className="b-2 bg-ui-200">1</div>
      <div className="b-2 bg-ui-200">2</div>
      <div className="b-2 bg-ui-200">3</div>
    </div>
  </div>
);
