import { cx } from "class-variance-authority";
import { Skeleton } from "../../Skeleton";

export const Index = () => (
  <div>
    <p>Excercise 1 / Task 1</p>
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
    </div>
    <p>Excercise 1 / Task 2</p>
    <div className="size-[400px]">
      <div className="m-auto size-[100px] bg-ui-300">100 x 100px</div>
    </div>
    <p>Excercise 2 / Task 1</p>
    <div className="flex gap-x-4">
      <Skeleton className="w-1/5 bg-ui-100" />
      <Skeleton className="relative -top-1 w-1/5 bg-brand-200" />
      <Skeleton className="w-1/5 bg-ui-300" />
    </div>
    <p>Excercise 2 / Task 2</p>
    <div className="w-[50vw]">
      <Skeleton className="w-[33vw] bg-ui-100" />
      <Skeleton className="inline-block w-[calc(100%-47px)] bg-brand-200" />
      <Skeleton className="inline-block w-[47px] bg-ui-300" />
    </div>
  </div>
);
