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
    <Sample name='E3/T1'>
      <div className='flex h-[20rem] w-[33vw] flex-wrap items-end justify-end bg-ui-300 pl-7'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </div>
    </Sample>
    <Sample name='E3/T2'>
      <div className='flex h-[80%] flex-col justify-between gap-2 sm:flex-row md:flex-wrap'>
        {Array.from({ length: 30 }).map((_, i) => (
          // eslint-disable-next-line react/jsx-key
          <Skeleton className='bg-ui-100'>Item {i}</Skeleton>
        ))}
      </div>
    </Sample>
    <Sample name='E3/T3'>
      <div className='flex h-[33vh] items-center justify-between bg-ui-300'>
        <Skeleton className='self-end'>Item 0</Skeleton>
        <Skeleton>Item 1</Skeleton>
        <Skeleton className='self-start'>Item 2</Skeleton>
        <Skeleton>Item 3</Skeleton>
        <Skeleton className='self-end'>Item 4</Skeleton>
      </div>
    </Sample>
    <Sample name='E3/T4'>
      <div className='flex h-[80vh] flex-col items-start justify-end gap-2 border lg:flex-row'>
        <Skeleton>Item 0</Skeleton>
        <Skeleton>Item 1</Skeleton>
        <Skeleton>Item 2</Skeleton>
        <Skeleton>Item 3</Skeleton>
        <Skeleton>Item 4</Skeleton>
        <Skeleton>Item 5</Skeleton>
        <Skeleton>Item 6</Skeleton>
        <Skeleton>Item 7</Skeleton>
        <Skeleton>Item 8</Skeleton>
        <Skeleton>Item 9</Skeleton>
      </div>
    </Sample>
    <Sample name='E4/T1'>
      <div className='grid grid-flow-row auto-rows-[1fr] grid-cols-[10rem_1fr_4rem] gap-2'>
        <img src='/assets/picture.jpg' alt='' className='row-span-3' />
        <Skeleton />
        <Skeleton />
        <Skeleton className='col-span-2' />
        <Skeleton className='col-span-2' />
        <Skeleton className='col-span-2 col-start-2' />
        <Skeleton className='col-span-2' />
        <Skeleton />
        <Skeleton />
        <Skeleton className='col-span-2' />
      </div>
    </Sample>
    <Sample name='E4/T2'>
      <div className='grid h-[80vh] auto-rows-fr items-center border'>
        <Skeleton className='justify-self-start'>Item 0</Skeleton>
        <Skeleton className='justify-self-start'>Item 1</Skeleton>
        <Skeleton className='justify-self-end'>Item 2</Skeleton>
        <Skeleton className='justify-self-center'>Item 3</Skeleton>
        <Skeleton>Item 4</Skeleton>
      </div>
    </Sample>
    <Sample name='E4/T3'>
      <div className='grid auto-cols-[auto_1fr] grid-flow-col gap-2 border'>
        <Skeleton>1</Skeleton>
        <Skeleton>2</Skeleton>
        <Skeleton>3</Skeleton>
        <Skeleton>4</Skeleton>
        <Skeleton>5</Skeleton>
      </div>
    </Sample>
  </div>
);
