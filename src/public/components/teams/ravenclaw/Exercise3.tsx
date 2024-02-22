import { Skeleton } from "../../Skeleton";

const Task1 = () => (
  <section>
    <h2 className="mb-2">Task 1</h2>
    <div className="flex h-[10rem] w-[33vw] items-end justify-end bg-ui-300 pl-7">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </div>
  </section>
);

const Task2 = () => (
  <section>
    <h2 className="mb-2">Task 2</h2>
    <div className="flex h-[80vh] flex-col content-evenly gap-2 overflow-auto border sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
      {Array.from({ length: 30 }).map((_, i) => (
        // eslint-disable-next-line react/jsx-key
        <Skeleton>Item {i}</Skeleton>
      ))}
    </div>
  </section>
);

const Task3 = () => (
  <section>
    <h2 className="mb-2">Task 3</h2>
    <div className="flex h-[33vh] content-center items-center justify-evenly border">
      <Skeleton className="self-end">Item 1 - 1</Skeleton>
      <Skeleton>Item 2 - 1</Skeleton>
      <Skeleton className="self-start">Item 3 - 1</Skeleton>
      <Skeleton>Item 4 - 1</Skeleton>
      <Skeleton className="self-end">Item 5 - 1</Skeleton>
    </div>
  </section>
);

const Task4 = () => (
  <section>
    <h2 className="mb-2">Task 4</h2>
    <div className="flex h-[80vh] flex-col gap-2 border md:flex-row md:items-start md:justify-end">
      {Array.from({ length: 10 }).map((_, i) => (
        // eslint-disable-next-line react/jsx-key
        <Skeleton>Item {i}</Skeleton>
      ))}
    </div>
  </section>
);

export const Exercise3 = () => (
  <section className="my-2">
    <h1 className="mb-3">Exercise 3</h1>
    <Task1 />
    <Task2 />
    <Task3 />
    <Task4 />
  </section>
);
