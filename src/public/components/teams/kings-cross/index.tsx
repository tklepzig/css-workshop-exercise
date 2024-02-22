import { cx } from "class-variance-authority"
import { Skeleton } from "../../Skeleton"

export const Index = () => (
  <div>
    <p> Exercise 1 - Task 1</p>

    <div className="p-3">
      <ul className="h-[10rem] w-[33%] overflow-auto border">
        {Array.from({ length: 10 }).map((_, i) => (
          <li
            key={i}
            className={cx(
              "px-1 py-3 odd:bg-ui-100",
              i === 4 && "sticky top-0 "
            )}
          >
            Item {i}
          </li>
        ))}
      </ul>
    </div>
    <p>Exercise 1 - Task 2</p>

    <div className="h-[400px] border px-[calc(50%-50px)] py-[150px]">
      <div className="size-[100px] bg-ui-300">100 x 100px</div>
    </div>

    <p>Exercise 1 - Task 3</p>

    <div className="relative border">
      <Skeleton className="m-2">1</Skeleton>
      <Skeleton className="relative -left-2 m-2">2</Skeleton>

      <Skeleton className="m-2">3 </Skeleton>
    </div>

    <p>Exercise 1 - Task 4</p>

    <div className="relative min-h-[calc(2rem+47px)] border">
      <h1>Any Headline</h1>
      <div className="absolute bottom-0 left-0 right-0 h-[47px] bg-ui-300">
        Always at the bottom
      </div>
    </div>

    <p> Exercise 2 - Task 1</p>

    <div className="relative mt-1">
      <Skeleton className="inline-block px-3">1</Skeleton>
      <Skeleton className="relative -top-2 ml-1 inline-block px-3">2</Skeleton>
      <Skeleton className="ml-1 inline-block px-3">3</Skeleton>
    </div>

    <p> Exercise 2 - Task 2</p>

    <div>
      <div className="w-[50vw] border p-2">
        <Skeleton className="mb-1 w-[33vw]">1/3 of viewport width</Skeleton>
        <Skeleton className="inline-block w-[calc(100%-47px)]">
          Full width minus 47px
        </Skeleton>
        <Skeleton className="inline-block w-[47px]">47</Skeleton>
      </div>
    </div>

    <p> Exercise 2 - Task 3</p>

    <div className="my-4">
      <div className=" border p-2">
        <span className="bg-ui-300 p-4">Inline</span>
        <span className="ml-6 bg-ui-300 p-4">Inline</span>
        <span className="ml-6 bg-ui-300 p-4">Inline</span>
      </div>
    </div>

    <p> Exercise 2 - Task 4</p>

    <div>
      <ul>
        {Array.from({ length: 10 }).map((_, i) => (
          // eslint-disable-next-line react/jsx-key
          <li className="group first:font-bold first:text-error-100 has-[p]:bg-ui-200 ">
            {i === 4 ? (
              <div>
                <span className="group-has-[p]:underline">
                  Item {i} with Paragraph:
                </span>
                <p className="">Once upon a time...</p>
              </div>
            ) : (
              <span>Item {i}</span>
            )}
          </li>
        ))}
      </ul>
    </div>

    <p> Exercise 2 - Task 5</p>

    <div>
      <input type="checkbox" className="peer" />
      <span className="ml-1 peer-[:hover]:bg-ui-100 peer-[:checked]:font-bold">
        My checkbox
      </span>
    </div>

    <p> Exercise 2 - Task 5</p>

    <div className="ml-3 w-[50vw] border">
      <div className="group">
        <header className="group-[:hover]:bg-ui-100">
          The Tale of the Three Brothers
        </header>
        <p className="first-letter:text-3xl first-line:italic group-[:hover]:bg-ui-100">
          Once upon a time there were three brothers that were walking down a
          road at twilight. In time the brothers reached a river too treacherous
          to pass, but they were talented in the magical arts and waved their
          wands and made a bridge...
        </p>
        <footer>From: The Tales of Beedle the Bard</footer>
      </div>
    </div>

    <p> Exercise 3 - Task 1 </p>

    <div>
      <div className="flex h-[20rem] w-[33vw] items-end justify-end border pl-7">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </div>
    </div>

    <p> Exercise 3 - Task 2</p>

    <div className="overflow-hidden border">
      <div className="flex h-[80vh] flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        {Array.from({ length: 30 }).map((_, i) => (
          // eslint-disable-next-line react/jsx-key
          <Skeleton>Item {i}</Skeleton>
        ))}
      </div>
    </div>

    <p> Exercise 3 - Task 3</p>

    <div className="flex h-[33vh] items-center justify-evenly border">
      <Skeleton className="self-end">Item 1</Skeleton>
      <Skeleton>Item 2</Skeleton>
      <Skeleton className="self-start">Item 3</Skeleton>
      <Skeleton>Item 4</Skeleton>
      <Skeleton className="self-end">Item 5</Skeleton>
    </div>

    <p> Exercise 3 - Task 4</p>

    <div className="flex h-[80vw] flex-col gap-2 border sm:flex-row sm:items-start sm:justify-end">
      {Array.from({ length: 10 }).map((_, i) => (
        <Skeleton key={i}>Item {i}</Skeleton>
      ))}
    </div>
  </div>
)
