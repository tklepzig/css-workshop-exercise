import { cx } from "class-variance-authority";

export const List = () => {
  const listItems = Array.from({ length: 10 }).map((_, i) => (
    // eslint-disable-next-line react/jsx-key
    <li
      className={cx(
        "py-2 pl-2",
        i === 3 && "sticky top-0",
        i & 1 ? "bg-ui-0" : "bg-heatmap-heat-30",
      )}
    >
      Item {i}
    </li>
  ));

  return (
    <div className="h-[10rem] w-[33%] overflow-auto">
      <ul>{listItems}</ul>
    </div>
  );
};
