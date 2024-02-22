import { cx } from "class-variance-authority";
import { Skeleton } from "../../Skeleton";

export const Index = () => (
  // <Exercise1Task1 />
  // <Exercise1Task2 />
  // <Exercise1Task3 />
  // <Exercise2Task1 />
  // <Exercise2Task2 />
  // <Exercise2Task3 />
  // <Exercise2Task4 />
  // <Exercise3Task1 />
  // <Exercise3Task2 />
  // <Exercise3Task3 />
  <Exercise3Task4 />
);

const Exercise1Task1 = () => (
  <div className="h-[10rem] w-[30%] overflow-auto">
    <ul>
      {Array.from({ length: 10 }).map((_, i) => (
        // eslint-disable-next-line react/jsx-key
        <li className={cx(i == 3 && "sticky top-0", "bg-ui-0 p-2")}>
          Item {i}
        </li>
      ))}
    </ul>
  </div>
)

const Exercise1Task2 = () => (
  <div className="h-[400px] border-2 border-ui-200">
    <div className="relative left-[calc(50%-50px)] top-[calc(50%-50px)] size-[100px] bg-ui-100">
      100 x 100
    </div>
  </div>
)

const Exercise1Task3 = () => (
  <div className="h-[100px] border-2 border-ui-200">
    <div className="w-[70%] self-center bg-ui-200">Box 1</div>
    <div className="-left-2 bg-ui-300">Box 2</div>
    <div className="bg-ui-400">Box 3</div>
  </div>
)

const Exercise2Task1 = () => (
  <>
    <Skeleton className="inline">1</Skeleton>
    <Skeleton className="relative -top-2 inline">2</Skeleton>
    <Skeleton className="inline">3</Skeleton>
  </>
)

const Exercise2Task2 = () => (
  <div className="w-[50vw] border p-2">
    <Skeleton className="mb-2 w-[33vw]">1/3 of viewport width</Skeleton>
    <Skeleton className="inline-block w-[calc(100%-47px)]">Full width minus 47px</Skeleton>
    <Skeleton className="inline-block w-[47px]">47px</Skeleton>
  </div>
)

const Exercise2Task3 = () => (

  <div className="block border p-2">
    <Skeleton className="m-4 inline p-5">Inline</Skeleton>
    <Skeleton className="m-4 inline p-5">Inline</Skeleton>
    <Skeleton className="m-4 inline p-5">Inline</Skeleton>
  </div>
)

const Exercise2Task4 = () => (
  <ul>
    {Array.from({ length: 10 }).map((_, i) => (
      // eslint-disable-next-line react/jsx-key
      <li className="first:font-bold first:text-error-100 ">
        {i === 4 ? (
          <div className="bg-ui-200">
            <span>Item {i} with Paragraph:</span>
            <p>Once upon a time...</p>
          </div>
        ) : (
          <span>Item {i}</span>
        )}
      </li>
    ))}
  </ul>
)

const Exercise3Task1 = () => (
  <div className="flex h-[20rem] w-1/3 flex-wrap content-end border pl-7">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  </div>
);

const Exercise3Task2 = () => (
  <div className="flex h-[80vh] flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
    {Array.from({ length: 30 }).map((_, i) => (
      // eslint-disable-next-line react/jsx-key
      <Skeleton>Item {i}</Skeleton>
    ))}
  </div>
);

const Exercise3Task3 = () => (
  <div className="flex h-[33vh] items-center justify-between border">
    <Skeleton className="self-end">Item 0</Skeleton>
    <Skeleton>Item 1</Skeleton>
    <Skeleton className="self-start">Item 2 </Skeleton>
    <Skeleton>Item 3</Skeleton>
    <Skeleton className="self-end">Item 4</Skeleton>
  </div>
);

const Exercise3Task4 = () => (
  <div className="flex h-[80vh] flex-col gap-2 md:flex-row md:items-start md:justify-end">
    {Array.from({ length: 10 }).map((_, i) => (
      // eslint-disable-next-line react/jsx-key
      <Skeleton>Item {i}</Skeleton>
    ))}
  </div>
);
