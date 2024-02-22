import { cx } from "class-variance-authority";
import { Skeleton } from "../../Skeleton";
import { List } from "./List";

const ThreeBoxes = () => (
  <div className="p-2">
    <Skeleton className="inline-block">1</Skeleton>
    <Skeleton className="relative -top-2 inline-block">2</Skeleton>
    <Skeleton className="inline-block">3</Skeleton>
  </div>
);

const E2T2 = () => (
  <div className="w-[50vw] border p-2">
    <Skeleton className="mb-2 w-[33vw]">1/3vw</Skeleton>
    <Skeleton className="inline-block w-[calc(100%-47px)]">w-47px</Skeleton>
    <Skeleton className="inline-block w-[47px]">47px</Skeleton>
  </div>
);

const E2T3 = () => (
  <div className="m-4 block border p-2">
    <span className="m-3 bg-ui-300 p-4">inline</span>
    <span className="m-3 bg-ui-300 p-4">inline</span>
    <span className="m-3 bg-ui-300 p-4">inline</span>
  </div>
);

const E2T4 = () => (
  <ul>
    {Array.from({ length: 10 }).map((_, i) => (
      // eslint-disable-next-line react/jsx-key
      <li
        className={cx(
          "first:font-bold first:text-error-100",
          "has-[p]:bg-ui-200"
        )}
      >
        {i === 4 ? (
          <div>
            <span>
              <u>Item {i} with Paragraph:</u>
            </span>
            <p>Once upon a time...</p>
          </div>
        ) : (
          <span>Item {i}</span>
        )}
      </li>
    ))}
  </ul>
);

const E3T1 = () => (
  <div className="flex h-7 w-[33vw] flex-wrap items-end justify-end overflow-auto bg-ui-200 pl-7">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  </div>
);

const E3T2 = () => (
  <div className="flex h-[80vh] flex-col justify-between gap-2 overflow-auto sm:flex-row sm:flex-wrap sm:items-center">
    {Array.from({ length: 30 }).map((_, i) => (
      // eslint-disable-next-line react/jsx-key
      <Skeleton>Item {i}</Skeleton>
    ))}
  </div>
);

const E3T3 = () => (
  <div
    className={cx(
      "flex h-[33vh] items-center justify-between",
      "border",
      "px-5"
    )}
  >
    <Skeleton className="self-end">Item 0</Skeleton>
    <Skeleton>Item 12</Skeleton>
    <Skeleton className="self-start">Item E</Skeleton>
    <Skeleton>Item A</Skeleton>
    <Skeleton className="self-end">Item S</Skeleton>
  </div>
);

const E3T4 = () => (
  <div
    className={cx(
      "flex h-[80vh] flex-col gap-2 md:flex-row",
      "overflow-auto md:items-start md:justify-end"
    )}
  >
    {Array.from({ length: 10 }).map((_, i) => (
      // eslint-disable-next-line react/jsx-key
      <Skeleton>Item {i}</Skeleton>
    ))}
  </div>
);

export const Index = () => (
  <>
    <h1>Exercise 1</h1>
    <h2>Task 1</h2>
    <List />
    <h1>Exercise 2</h1>
    <h2>Task 1</h2>
    <ThreeBoxes />
    <h2>Task 2</h2>
    <E2T2 />
    <h2>Task 3</h2>
    <E2T3 />
    <h2>Task 4</h2>
    <E2T4 />

    <h1>Exercise 3</h1>
    <h2>Task 1</h2>
    <E3T1 />
    <h2>Task 2</h2>
    <E3T2 />
    <h2>Task 3</h2>
    <E3T3 />
    <h2>Task 4</h2>
    <E3T4 />
  </>
);
