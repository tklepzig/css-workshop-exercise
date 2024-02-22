import { Skeleton } from "../../Skeleton";

const Task1 = () => (
  <section>
    <h2 className="mb-2">Task 1</h2>
    <div className="grid auto-rows-fr grid-cols-[10rem_1fr_4rem] gap-3 p-3">
      <img className="row-span-3" src="/assets/picture.jpg" alt="" />
      <Skeleton />
      <Skeleton />
      <Skeleton className="col-span-2" />
      <Skeleton className="col-span-2" />
      <Skeleton className="col-span-2 col-start-2" />
      <Skeleton className="col-span-2" />
      <Skeleton />
      <Skeleton />
      <Skeleton className="col-span-2" />
    </div>
  </section>
);

export const Exercise4 = () => (
  <section className="my-2">
    <h1 className="mb-3">Exercise 4</h1>
    <Task1 />
  </section>
);
