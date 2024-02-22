import { Skeleton } from "../../Skeleton";

export const Index = () => (
  <>
    <div className="h-[10rem] w-1/3 overflow-auto">
      <ul className="[&>li:nth-child(4)]:sticky [&>li:nth-child(4)]:top-0">
        {Array.from({ length: 10 }).map((_, i) => (
          // eslint-disable-next-line react/jsx-key
          <li className="bg-ui-200 p-2 even:bg-ui-100">Item {i}</li>
        ))}
      </ul>
    </div>
    <Exercise2 />
    <Exercise3 />
  </>
);

export const Exercise2 = () => (
  <>
    <h1>Exercise 2</h1>
    <div>
      <Skeleton className="inline relative">1</Skeleton>
      <Skeleton className="inline -top-2 relative">2</Skeleton>
      <Skeleton className="inline relative">3</Skeleton>
    </div>
    <div className="w-[50%] border-black border-2 p-2">
      <Skeleton className="w-[33.33vw]">1/3 of viewport width</Skeleton>
      <Skeleton className="inline-block w-[calc(100%-47px)]">
        Full width minus 47px
      </Skeleton>
      <Skeleton className="inline-block w-[47px]">47px</Skeleton>
    </div>
    <div className="w-[50%] border-black border-2 p-2">
      <Skeleton className="inline-block">Inline</Skeleton>
      <Skeleton className="inline-block mx-[3rem]">Inline</Skeleton>
      <Skeleton className="inline-block">Inline</Skeleton>
    </div>
  </>
);

export const Exercise3 = () => (
  <>
    Exercise 3
    <div className="bg-ui-300 pl-7 h-[15em] w-[33.33vw] flex justify-end items-end">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </div>
    <div className="h-[80vh] flex gap-2 flex-col sm:flex-row sm:flex-wrap justify-evenly sm:items-center ">
      {Array.from({ length: 30 }).map((_, i) => (
        // eslint-disable-next-line react/jsx-key
        <Skeleton>Item {i}</Skeleton>
      ))}
    </div>
  </>
);
