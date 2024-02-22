import { cx } from "class-variance-authority";

const Task1 = () => (
  <section>
    <h2 className="mb-2">Task 1</h2>
    <ul className={"h-[10rem] w-1/3 overflow-auto border"}>
      {Array.from({ length: 10 }).map((_, i) => (
        // eslint-disable-next-line react/jsx-key
        <li
          className={cx(
            "bg-ui-0 px-1 py-3 even:bg-ui-200",
            i === 4 && "sticky top-0"
          )}
        >
          Item {i}
        </li>
      ))}
    </ul>
  </section>
);

export const Exercise1 = () => (
  <section className="my-2">
    <h1 className="mb-3">Exercise 1</h1>
    <Task1 />
  </section>
);
