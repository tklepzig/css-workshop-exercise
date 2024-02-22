import { cx } from "class-variance-authority";
import { useState } from "react";
import { Skeleton } from "../../Skeleton";

export const Index = () => {
  const [value, setValue] = useState(10);

  return (
    <div>
      <div className="p-2">
        <ul className="h-[10rem] w-1/3 overflow-auto border-[1px]">
          {Array.from({ length: 10 }).map((_, i) => (
            // eslint-disable-next-line react/jsx-key
            <li
              className={cx(
                "px-1 py-3",
                "even:bg-ui-100",
                i === 3 && "sticky top-0"
              )}
            >
              Item {i}
            </li>
          ))}
        </ul>
      </div>
      <div className="size-[400px] border-[1px]">
        <div className="relative left-[calc(50%-50px)] top-[calc(50%-50px)] size-[100px] bg-ui-200 ">
          100 x 100px
        </div>
      </div>
      <div>
        <div className="p-2">
          <Skeleton>1</Skeleton>
          <Skeleton className="relative -left-2">2</Skeleton>
          <Skeleton>3</Skeleton>
        </div>
      </div>
      <div className="border p-2">
        <div>
          <h1>Any Headline</h1>
          <div className="absolute h-[47px]">Always at the bottom</div>
        </div>
      </div>
      <div>
        <Skeleton className="inline">1</Skeleton>
        <Skeleton className="relative -top-2 inline">2</Skeleton>
        <Skeleton className="inline">3</Skeleton>
      </div>
      <div>
        <div className="w-1/2 border">
          <Skeleton className="w-1/3">1</Skeleton>
          <Skeleton className="inline-block w-[calc(100%-47px)]">2</Skeleton>
          <Skeleton className="inline-block w-[47px]">3</Skeleton>
        </div>
      </div>
      <div>
        <div className="border">
          <Skeleton className="m-6 inline py-3">1</Skeleton>
          <Skeleton className="m-6 inline py-3">2</Skeleton>
          <Skeleton className="m-6 inline py-3">3</Skeleton>
        </div>
      </div>
      <div>
        <ul>
          {Array.from({ length: 10 }).map((_, i) => (
            // eslint-disable-next-line react/jsx-key
            <li className="first:font-bold first:text-error-100">
              {i === 4 ? (
                <div>
                  <span className="underline">Item {i} with Paragraph:</span>
                  <p>Once upon a time...</p>
                </div>
              ) : (
                <span>Item {i}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <input type="checkbox" className="peer" />
        <div className="inline peer-checked:font-bold peer-hover:bg-ui-200">
          Checkbox
        </div>
      </div>
      <div>
        <div className="group border p-2">
          <header className="group-hover:bg-ui-200">
            The Tale of the Three Brothers
          </header>
          <p className="first-letter:text-3xl first-line:italic group-hover:bg-ui-200">
            Once upon a time there were three brothers that were walking down a
            road at twilight. In time the brothers reached a river too
            treacherous to pass, but they were talented in the magical arts and
            waved their wands and made a bridge...
          </p>
          <footer>From: The Tales of Beedle the Bard</footer>
        </div>
      </div>
      <div>
        <div className="flex h-6 w-1/3 items-end justify-end bg-ui-200 pl-7">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </div>
      </div>
      <div>
        <div className="flex h-[80vw] flex-wrap items-center justify-between gap-2 overflow-auto border">
          {Array.from({ length: 30 }).map((_, i) => (
            // eslint-disable-next-line react/jsx-key
            <Skeleton className="w-full sm:w-auto">Item {i}</Skeleton>
          ))}
        </div>
      </div>
      <div>
        <div className="flex h-[33vw] justify-evenly">
          <Skeleton className="self-end">1</Skeleton>
          <Skeleton className="self-center">2</Skeleton>
          <Skeleton className="self-start">3</Skeleton>
          <Skeleton className="self-center">4</Skeleton>
          <Skeleton className="self-end">5</Skeleton>
        </div>
      </div>
      <div>
        <div className="flex h-[80vw] flex-col gap-2 md:flex-row md:items-start md:justify-end">
          {Array.from({ length: 10 }).map((_, i) => (
            <Skeleton key={i}>Item {i}</Skeleton>
          ))}
        </div>
      </div>
      <div>
        <div className="grid grid-cols-[10rem_auto_4rem] gap-3">
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

        <div className="grid w-[80vw] grid-cols-[auto] justify-items-start gap-3">
          <Skeleton>0</Skeleton>
          <Skeleton>1</Skeleton>
          <Skeleton className="justify-self-end">2</Skeleton>
          <Skeleton className="justify-self-center">3</Skeleton>
          <Skeleton className="justify-self-stretch">4</Skeleton>
        </div>
        <div>
          <input
            type="range"
            value={value}
            min={5}
            max={20}
            onChange={(e) => setValue(parseInt(e.target.value))}
          />
          <div className="grid auto-cols-[1fr_3fr] grid-flow-col gap-2">
            {Array.from({ length: value }).map((_, i) => (
              <Skeleton key={i}>{i}</Skeleton>
            ))}
          </div>
        </div>
        <div className="grid h-[80vw] grid-cols-[5rem_5rem] grid-rows-[5rem_5rem] content-end items-start justify-center gap-2">
          <Skeleton>1</Skeleton>
          <Skeleton>2</Skeleton>
          <Skeleton>3</Skeleton>
          <Skeleton>4</Skeleton>
        </div>
        <div className="grid grid-cols-[repeat(2,auto_1fr_auto)_1fr_1fr] gap-2">
          <Skeleton />
          <Skeleton />
          <Skeleton className="w-[5rem]">5</Skeleton>
          <Skeleton />
          <Skeleton />
          <Skeleton className="w-[5rem]">5</Skeleton>
          <Skeleton />
          <Skeleton />
        </div>
        <div className="grid grid-cols-3 grid-rows-[auto_1fr_auto] gap-2">
          <section className="row-span-3 grid grid-rows-subgrid bg-ui-200">
            <header>Title</header>
            <article>Content</article>
            <footer>Footer</footer>
          </section>
          <section className="row-span-3 grid grid-rows-subgrid bg-ui-200">
            <header>Title which breaks onto a new line</header>
            <article>Content</article>
            <footer>Footer</footer>
          </section>
          <section className="row-span-3 grid grid-rows-subgrid bg-ui-200">
            <header>Title</header>
            <article>Content also somewhat longer so it breaks</article>
            <footer>Footer</footer>
          </section>
        </div>

        <div className="grid grid-cols-[10rem_auto_4rem] gap-2 [grid-template-areas:'img_a_b''img_c_c''img_d_d''._e_e''f_f_g''h_i_i']">
          <img className="[grid-area:img]" src="/assets/picture.jpg" alt="" />
          <Skeleton className="[grid-area:a]" />
          <Skeleton className="[grid-area:b]" />
          <Skeleton className="[grid-area:c]" />
          <Skeleton className="[grid-area:d]" />
          <Skeleton className="[grid-area:e]" />
          <Skeleton className="[grid-area:f]" />
          <Skeleton className="[grid-area:g]" />
          <Skeleton className="[grid-area:h]" />
          <Skeleton className="[grid-area:i]" />
        </div>
      </div>
    </div>
  );
};
