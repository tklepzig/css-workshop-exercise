import { Skeleton } from "../../Skeleton";

const Task1 = () => (
  <section>
    <h2 className="mb-2">Task 1</h2>
    <div className="grid grid-cols-[10rem_1fr_4rem] gap-3 p-3">
      <img className="row-span-4" src="/assets/picture.jpg" alt="" />
      <Skeleton className="h-[2.7rem]" />
      <Skeleton className="h-[2.7rem]" />
      <Skeleton className="col-span-2 h-[2.7rem]" />
      <Skeleton className="col-span-2 h-[2.7rem]" />
      <Skeleton className="col-span-2 h-[2.7rem]" />
      <Skeleton className="col-span-2 h-[2.7rem]" />
      <Skeleton className="h-[2.7rem]" />
      <Skeleton className="h-[2.7rem]" />
      <Skeleton className="col-span-2 h-[2.7rem]" />
    </div>
  </section>
);

export const Exercise4 = () => (
  <section className="my-2">
    <h1 className="mb-3">Exercise 4</h1>
    <Task1 />
  </section>
);
