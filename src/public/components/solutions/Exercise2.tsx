import { Skeleton } from "../Skeleton";

export const Exercise2 = {
  Task1: () => (
    <>
      <Skeleton className="inline-block px-4 py-2">1</Skeleton>
      <Skeleton className="relative -top-2 inline-block px-4 py-2">2</Skeleton>
      <Skeleton className="inline-block px-4 py-2">3</Skeleton>
    </>
  ),

  Task2: () => (
    <>
      <header>Half of the viewport width</header>
      <div className="w-[50vw] border p-2">
        <Skeleton className="mb-2 w-[33vw]">1/3 of viewport width</Skeleton>
        <Skeleton className="inline-block w-[calc(100%-47px)]">
          Full width minus 47px
        </Skeleton>
        <Skeleton className="inline-block w-[47px]">47px</Skeleton>
      </div>
    </>
  ),

  Task3: () => (
    <div className="border p-2">
      <span className="m-4 bg-ui-300 p-4">Inline</span>
      <span className="m-4 bg-ui-300 p-4">Inline</span>
      <span className="m-4 bg-ui-300 p-4">Inline</span>
    </div>
  ),

  Task4: () => (
    <ul>
      {Array.from({ length: 10 }).map((_, i) => (
        //Alternative: Add `group` to li
        // eslint-disable-next-line react/jsx-key
        <li className="first:font-bold first:text-error-100 has-[p]:bg-ui-200">
          {i === 4 ? (
            <div>
              {/*Alternative: Change to `group-has-[p]:underline` */}
              <span className="has-[+p]:underline">
                Item {i} with Paragraph:
              </span>
              <p>Once upon a time...</p>
            </div>
          ) : (
            <span>Item {i}</span>
          )}
        </li>
      ))}
    </ul>
  ),

  Task5: () => (
    <>
      <input type="checkbox" className="peer mr-1" />
      <span className="peer-checked:font-bold peer-hover:bg-ui-200">
        My Checkbox
      </span>
    </>
  ),

  Task6: () => (
    <div className="group border p-2">
      <header className="group-hover:bg-ui-200">
        The Tale of the Three Brothers
      </header>
      <p className="first-letter:text-3xl first-line:italic group-hover:bg-ui-200">
        Once upon a time there were three brothers that were walking down a road
        at twilight. In time the brothers reached a river too treacherous to
        pass, but they were talented in the magical arts and waved their wands
        and made a bridge...
      </p>
      <footer>From: The Tales of Beedle the Bard</footer>
    </div>
  ),
};
