import { useState } from "react";
import { Skeleton } from "../Skeleton";
import styles from "./Exercise4-Bonus.module.css";

export const Exercise4 = {
  Task1: () => (
    <div className="grid auto-rows-fr grid-cols-[10rem_1fr_auto] gap-3">
      <img src="/assets/picture.jpg" alt="" className="row-span-3" />
      <Skeleton />
      <Skeleton className="w-7" />
      <Skeleton className="col-span-2" />
      <Skeleton className="col-span-2" />
      <Skeleton className="col-span-2 col-start-2" />
      <Skeleton className="col-span-2" />
      <Skeleton className="w-7" />
      <Skeleton />
      <Skeleton className="col-span-2" />
    </div>
  ),
  Task2: () => (
    <div className="grid h-[80vh] content-evenly justify-items-start gap-2 border">
      {Array.from({ length: 5 }).map((_, i) => (
        // eslint-disable-next-line react/jsx-key
        <Skeleton
          className={`flex items-center ${i === 2 && "justify-self-end"} ${
            i === 3 && "justify-self-center"
          } ${i === 4 && "justify-self-stretch"}`}
        >
          Item {i}
        </Skeleton>
      ))}
    </div>
  ),
  Task3: () => {
    const [v, sv] = useState(5);

    return (
      <>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min="5"
            max="20"
            value={v}
            onChange={(e) => sv(+e.target.value)}
          />
          <span>{v}</span>
        </div>
        <div className="grid auto-cols-[1fr_4fr] grid-flow-col gap-2 border">
          {Array.from({ length: v }).map((_, i) => (
            // eslint-disable-next-line react/jsx-key
            <Skeleton>{i}</Skeleton>
          ))}
        </div>
      </>
    );
  },
  Task4: () => (
    <div className="grid h-[80vh] grid-cols-[5rem_5rem] grid-rows-[5rem_5rem] content-end items-start justify-center gap-2 border">
      <Skeleton>1</Skeleton>
      <Skeleton>2</Skeleton>
      <Skeleton>3</Skeleton>
      <Skeleton>4</Skeleton>
    </div>
  ),
  Task5: () => (
    <div className="grid grid-cols-[repeat(2,auto_1fr_5rem)_repeat(2,1fr)] gap-2">
      <Skeleton />
      <Skeleton />
      <Skeleton>5rem</Skeleton>
      <Skeleton />
      <Skeleton />
      <Skeleton>5rem</Skeleton>
      <Skeleton />
      <Skeleton />
    </div>
  ),
  Task6: () => (
    <div className="grid grid-cols-3 grid-rows-[auto_1fr_auto] gap-2">
      <section className="row-span-3 grid grid-rows-subgrid bg-ui-200 p-2">
        <header>Title</header>
        <article>Content</article>
        <footer>Footer</footer>
      </section>
      <section className="row-span-3 grid grid-rows-subgrid bg-ui-200 p-2">
        <header>Title which breaks onto a new line</header>
        <article>Content</article>
        <footer>Footer</footer>
      </section>
      <section className="row-span-3 grid grid-rows-subgrid bg-ui-200 p-2">
        <header>Title</header>
        <article>Content also somewhat longer so it breaks</article>
        <footer>Footer</footer>
      </section>
    </div>
  ),
  Bonus: () => (
    <div className={styles.myGrid}>
      <img src="/assets/picture.jpg" alt="" className="[grid-area:pic]" />
      <Skeleton className="[grid-area:a1]" />
      <Skeleton className="w-7 [grid-area:a2]" />
      <Skeleton className="[grid-area:b]" />
      <Skeleton className="[grid-area:c]" />
      <Skeleton className="[grid-area:d]" />
      <Skeleton className="[grid-area:e1]" />
      <Skeleton className="w-7 [grid-area:e2]" />
      <Skeleton className="[grid-area:f1]" />
      <Skeleton className="[grid-area:f2]" />
    </div>
  ),
};
