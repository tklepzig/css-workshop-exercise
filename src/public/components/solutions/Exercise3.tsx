import { Skeleton } from "../Skeleton";

export const Exercise3 = {
  Task1: () => (
    <div className="flex h-[10rem] w-[33vw] items-end justify-end bg-ui-300 p-1 pl-7">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </div>
  ),

  Task2: () => (
    <div className="flex h-[80vh] flex-col content-evenly justify-between gap-2 border sm:flex-row sm:flex-wrap">
      {Array.from({ length: 30 }).map((_, i) => (
        // eslint-disable-next-line react/jsx-key
        <Skeleton>Item {i}</Skeleton>
      ))}
    </div>
  ),

  Task3: () => (
    <div className="flex h-[33vh] items-center justify-evenly gap-2 border">
      {Array.from({ length: 5 }).map((_, i) => (
        // eslint-disable-next-line react/jsx-key
        <Skeleton
          className={`${i === 2 && " self-start"} ${
            (i === 4 || i === 0) && " self-end"
          }`}
        >
          Item {i}
        </Skeleton>
      ))}
    </div>
  ),

  Task4: () => (
    <div className="flex h-[80vh] flex-col justify-start gap-2 border md:flex-row md:items-start md:justify-end">
      {Array.from({ length: 10 }).map((_, i) => (
        // eslint-disable-next-line react/jsx-key
        <Skeleton>Item {i}</Skeleton>
      ))}
    </div>
  ),
};
