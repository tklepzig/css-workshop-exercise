# Block, Inline and Pseudo Classes/Elements - Task 4

- The list as shown in the screenshot has to be implemented with the markup
  given below
  - The first item has the text color `error100` and uses bold font
  - The list item which contains a paragraph is styled differently as the other
    ones
- No additional boolean logic is allowed, only CSS

---

    <ul>
    {Array.from({ length: 10 }).map((_, i) => (
        // eslint-disable-next-line react/jsx-key
        <li>
        {i === 4 ? (
            <div>
            <span>
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
