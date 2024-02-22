import { cx } from "class-variance-authority";
import { Skeleton } from "../../Skeleton";

export const Index = () => (
  <div>
    <p> Task 1</p>

    <div className="p-3">
      <ul className="h-[10rem] w-[33%] overflow-auto border">
        {Array.from({ length: 10 }).map((_, i) => (
          <li
            key={i}
            className={cx(
              "px-1 py-3 odd:bg-ui-100",
              i === 4 && "sticky top-0 ",
            )}
          >
            Item {i}
          </li>
        ))}
      </ul>
    </div>
    <p> Task 2</p>

    <div className="h-[400px] border px-[calc(50%-50px)] py-[150px]">
      <div className="size-[100px] bg-ui-300">100 x 100px</div>
    </div>

    <p> Task 3</p>

    <div>
      <Skeleton />
      <Skeleton className="ml-[-0.5rem]" />
      <Skeleton />
    </div>

    <p> Exercise 2 - Task 1</p>

    <div className="relative mt-1">
      <Skeleton className="inline-block px-3">1</Skeleton>
      <Skeleton className="relative -top-2 ml-1 inline-block px-3">2</Skeleton>
      <Skeleton className="ml-1 inline-block px-3">3</Skeleton>
    </div>
  </div>
);
