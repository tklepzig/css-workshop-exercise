import { cx } from "class-variance-authority";
import { HTMLAttributes } from "react";

export const Skeleton = ({
  children,
  className,
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cx(
      "min-h-[1lh] whitespace-nowrap rounded-full",
      "bg-ui-300 px-2 text-center leading-3",
      "text-typography-200",
      className
    )}
  >
    {children}
  </div>
);
