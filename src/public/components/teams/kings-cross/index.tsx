import { cx } from "class-variance-authority"

export const Index = () => (
  <div>
    <p> Task 1</p>

    <div className="p-3">
      <ul className="h-[10rem] w-[33%] overflow-auto border">
        {Array.from({ length: 10 }).map((_, i) => (
          <li
            key={i}
            className={cx(
              "px-1 py-3 odd:bg-ui-100",
              i === 4 && "sticky top-0 "
            )}
          >
            Item {i}
          </li>
        ))}
      </ul>
    </div>
    <p> Task 2</p>

    <div className="h-[400px] border px-[calc(50%-50px)] py-[150px]">
      <div className="size-[100px] bg-ui-300">100 x 100px</div>
    </div>
  </div>
)
