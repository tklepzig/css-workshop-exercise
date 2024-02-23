import { cx } from "class-variance-authority";
import { Skeleton } from "../Skeleton";

export const Exercise1 = {
  Task1: () => (
    <div className="h-[10rem] overflow-auto border">
      <ul>
        {Array.from({ length: 10 }).map((_, i) => (
          // eslint-disable-next-line react/jsx-key
          <li
            className={cx(
              "px-1 py-3",
              i === 3 && "sticky top-0",
              i % 2 == 0 ? "bg-ui-100" : "bg-ui-200"
            )}
          >
            Item {i}
          </li>
        ))}
      </ul>
    </div>
  ),

  Task2: () => (
    <>
      <span>Height: 400px</span>
      <div className="relative h-[400px] border">
        <div className="absolute left-[calc(50%-50px)] top-[calc(50%-50px)] size-[100px] bg-ui-300">
          100 x 100px
        </div>
      </div>
    </>
  ),

  Task3: () => (
    <>
      <Skeleton className="mb-2">1</Skeleton>
      <Skeleton className="relative -left-2 mb-2">2</Skeleton>
      <Skeleton>3</Skeleton>
    </>
  ),

  Task4: () => (
    <div className="relative border">
      <h1 className="mb-[47px]">Any Headline</h1>
      <div className="absolute inset-x-0 bottom-0 h-[47px] bg-ui-300">
        Always at the bottom
      </div>
    </div>
  ),
};
