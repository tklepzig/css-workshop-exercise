import { cx } from "class-variance-authority";
import { PropsWithChildren } from "react";
import { Skeleton } from "../../Skeleton";

const Sample = ({ children, name }: PropsWithChildren<{ name: string }>) => (
  <section className='grid gap-3 rounded bg-ui-0 shadow-sm'>
    <header className='border-b border-solid border-ui-300 p-2 text-center text-xl text-ui-400'>
      {name}
    </header>
    <div className='overflow-hidden p-2'>{children}</div>
  </section>
);

export const Index = () => (
  <div className='grid gap-2 bg-ui-200'>
    <Sample name='E1/T1'>
      <div className='h-[10rem] w-[33%] overflow-y-auto'>
        <ul>
          {Array.from({ length: 10 }).map((_, i) => (
            // eslint-disable-next-line react/jsx-key
            <li className={cx(i == 3 && "sticky top-0", "bg-ui-0 p-2")}>
              Item {i}
            </li>
          ))}
        </ul>
      </div>
    </Sample>
    <Sample name='E1/T2'>
      <div className='h-[400px] bg-ui-400 py-[25%] relative'>
        <div className='absolute left-[calc(50%-50px)]  top-[calc(50%-50px)]  size-[100px] bg-ui-200'>
          100 x 100px
        </div>
      </div>
    </Sample>
    <Sample name='E1/T3'>
      <Skeleton className='mb-2'>1</Skeleton>
      <Skeleton className='relative -left-2 mb-2'>2</Skeleton>
      <Skeleton>3</Skeleton>
    </Sample>
  </div>
);
