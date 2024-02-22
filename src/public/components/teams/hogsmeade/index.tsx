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
      <div className='relative h-[400px] bg-ui-400 py-[25%]'>
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
    <Sample name='E2/T1'>
      <Skeleton className='inline'>1</Skeleton>
      <Skeleton className='relative -top-2 inline'>2</Skeleton>
      <Skeleton className='inline'>3</Skeleton>
    </Sample>
    <Sample name='E2/T2'>
      <div className='w-[50vw] border bg-ui-100'>
        <Skeleton className='w-[33vw]'>1/3 of viewport width</Skeleton>

        <Skeleton className='inline-block w-[calc(100%-47px)]'>
          Full width minus 47px
        </Skeleton>
        <Skeleton className='inline-block w-[47px]'>47px</Skeleton>
      </div>
    </Sample>
    <Sample name='E2/T3'>
      <div className='border'>
        <span className='mx-6 bg-ui-300 p-4'>Inline</span>
        <span className='mx-6 bg-ui-300 p-4'>Inline</span>
        <span className='mx-6 bg-ui-300 p-4'>Inline</span>
      </div>
    </Sample>
    <Sample name='E2/T4'>
      <ul>
        {Array.from({ length: 10 }).map((_, i) => (
          // eslint-disable-next-line react/jsx-key
          <li>
            {i === 4 ? (
              <div>
                <span>Item {i} with Paragraph:</span>
                <p>Once upon a time...</p>
              </div>
            ) : (
              <span>Item {i}</span>
            )}
          </li>
        ))}
      </ul>
    </Sample>
  </div>
);
