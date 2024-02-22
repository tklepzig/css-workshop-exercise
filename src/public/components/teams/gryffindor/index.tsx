import { cx } from "class-variance-authority";
import { Skeleton } from "../../Skeleton";

export const Index = () => (
  <>
    <>
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
      <div className="h-[400px] border-2 border-ui-200">
        <div className="relative left-[calc(50%-50px)] top-[calc(50%-50px)] size-[100px] bg-ui-100">
          100 x 100
        </div>
      </div>
      <div className="h-[100px] border-2 border-ui-200">
        <div className="w-[70%] self-center bg-ui-200">Box 1</div>
        <div className="-left-2 bg-ui-300">Box 2</div>
        <div className="bg-ui-400">Box 3</div>
      </div>
    </>
    <>
      <Skeleton className="inline">1</Skeleton>
      <Skeleton className="relative -top-2 inline">2</Skeleton>
      <Skeleton className="inline">3</Skeleton>
    </>
    <div className="w-[50vw] border p-2">
      <Skeleton className="w-[33vw]">1/3 of viewport width</Skeleton>
      <div>
        <Skeleton className="my-2 inline-block w-[calc(100%-47px)]">Full width minus 47px</Skeleton>
        <Skeleton className="inline-block w-[47px]">47px</Skeleton>  
      </div>
    </div>
    <div className="block border p-2">
      <Skeleton className="m-4 inline p-5">Inline</Skeleton>
      <Skeleton className="m-4 inline p-5">Inline</Skeleton>
      <Skeleton className="m-4 inline p-5">Inline</Skeleton>
    </div>
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
  </>
);
