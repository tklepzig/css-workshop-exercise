# Position and Size - Task 1

- Create a list which should contain 1 sticky item
- The height of the list equals 10 times the root font size
- The width is 1/3 of the parent width
- It needs scrolling enabled (Hint: Can be enabled by setting `overflow-auto` to
  the div)
- The list items need some padding (Use an appropriate design token)
- See the screenshot/screencast for the expected result
- The markup is given below

---

    <div>
        <ul>
            {Array.from({ length: 10 }).map((_, i) => (
            // eslint-disable-next-line react/jsx-key
            <li>
                Item {i}
            </li>
            ))}
        </ul>
    </div>
