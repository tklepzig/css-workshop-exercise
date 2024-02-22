import { cx } from "class-variance-authority";

export const Index = () => (
  <>
    <div className="h-[10rem] w-[30%] overflow-auto">
      <ul>
        {Array.from({ length: 10 }).map((_, i) => (
          // eslint-disable-next-line react/jsx-key
          <li className={cx(i == 3 && "sticky top-0", "bg-ui-0 p-2")}>
            Item {i}
          </li>
        ))}
      </ul>
    </div>
    <div className="h-[400px] border-2 border-ui-200">
      <div className="relative left-[calc(50%-50px)] top-[calc(50%-50px)] size-[100px] bg-ui-100">
        100 x 100
      </div>
    </div>
    <div className="h-[100px] border-2 border-ui-200">
      <div className="w-[70%] self-center bg-ui-200">Box 1</div>
      <div className="-left-2 bg-ui-300">Box 2</div>
      <div className="bg-ui-400">Box 3</div>
    </div>
  </>
);
