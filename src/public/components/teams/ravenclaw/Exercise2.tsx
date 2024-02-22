import { Skeleton } from "../../Skeleton";

const Task1 = () => (
  <section>
    <h2 className="mb-2">Task 1</h2>
    <div className="p-2">
      <Skeleton className="inline-block p-2 px-4">1</Skeleton>
      <Skeleton className="relative -top-2 inline-block p-2 px-4">2</Skeleton>
      <Skeleton className="inline-block p-2 px-4">3</Skeleton>
    </div>
  </section>
);

const Task2 = () => (
  <section>
    <h2 className="mb-2">Task 2</h2>
    <div className="w-[50vw] border p-2">
      <div className="mb-2 inline-block w-[calc(100vw/3)]">
        <Skeleton>1/3 of viewport width</Skeleton>
      </div>
      <div className="inline-block w-[calc(100%-47px)]">
        <Skeleton className="w-full">full width minus 47px</Skeleton>
      </div>
      <div className="inline-block w-[47px]">
        <Skeleton>47px</Skeleton>
      </div>
    </div>
  </section>
);

const Task3 = () => (
  <section>
    <h2 className="mb-2">Task 3</h2>
    <div className="mt-3 border p-1">
      <span className="m-4 bg-ui-300 p-3">inline</span>
      <span className="m-4 bg-ui-300 p-3">inline</span>
      <span className="m-4 bg-ui-300 p-3">inline</span>
    </div>
  </section>
);

const Task4 = () => (
  <section>
    <h2 className="mb-2 mt-3">Task 4</h2>
    <ul>
      {Array.from({ length: 10 }).map((_, i) => (
        // eslint-disable-next-line react/jsx-key
        <li className="first:font-bold first:text-error-100">
          {i === 4 ? (
            <div>
              <span>Item {i} with Paragraph:</span>
              <p>Once upon a time...</p>
            </div>
          ) : (
            <span>Item {i}</span>
          )}
        </li>
      ))}
    </ul>
  </section>
);

export const Exercise2 = () => (
  <section className="my-2">
    <h1 className="mb-3">Exercise 2</h1>
    <Task1 />
    <Task2 />
    <Task3 />
    <Task4 />
  </section>
);
