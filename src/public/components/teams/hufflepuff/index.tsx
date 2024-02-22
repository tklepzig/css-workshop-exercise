import { cx } from "class-variance-authority";
import { Skeleton } from "../../Skeleton";

export const Index = () => (
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
          road at twilight. In time the brothers reached a river too treacherous
          to pass, but they were talented in the magical arts and waved their
          wands and made a bridge...
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
  </div>
);
