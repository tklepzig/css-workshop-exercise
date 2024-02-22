import { cx } from "class-variance-authority";

export const Index = () => (
  <div className={'m-2'}>
    <ul className={'h-[10rem] w-1/3 overflow-auto border'}>
      {Array.from({ length: 10 }).map((_, i) => (
        // eslint-disable-next-line react/jsx-key
        <li className={cx('bg-ui-0 px-1 py-3 even:bg-ui-200', i === 4 && 'sticky top-0')}>Item {i}</li>
      ))}
    </ul>
  </div>
);
