import { cx } from "class-variance-authority";
import { Skeleton } from "../../Skeleton";

export const Index = () => (
  <div className="flex h-[33vh] content-start justify-between border">
    <Skeleton className="self-end">Item 0</Skeleton>
    <Skeleton className="self-center">Item 1</Skeleton>
    <Skeleton className="self-start">Item 2</Skeleton>
    <Skeleton className="self-center">Item 3</Skeleton>
    <Skeleton className="self-end">Item 4</Skeleton>
  </div>
);
export const e3t2 = () => (
  <div className="flex h-[80vh] flex-col content-start justify-between gap-2 overflow-auto md:flex-row md:flex-wrap">
    {Array.from({ length: 30 }).map((_, i) => (
      // eslint-disable-next-line react/jsx-key
      <Skeleton>Item {i}</Skeleton>
    ))}
  </div>
);

export const e3t1 = () => (
  <div className="flex h-[10rem] w-[33vw] items-end justify-end border p-2 pl-7">
    This is a box whose text is bottom-right aligned and supports wrapping
  </div>
);

export const Previous = () => (
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
