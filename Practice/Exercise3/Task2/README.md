# Media Queries and Flexbox - Task 2

- Create a container which holds 30 items (see code below)
- There should be a space between every item of `0.5rem`
- The container should have a 80% of the viewport height
- On small screens it should render the items below each other
- On screens greater or equal than `640px` it should render the items next to
  each other and wrap when the viewport width is no large enough
- For implementing the correct alignment or the items please refer to the
  screenshot/screencast

---

    <div>
      {Array.from({ length: 30 }).map((_, i) => (
        // eslint-disable-next-line react/jsx-key
        <Skeleton>Item {i}</Skeleton>
      ))}
    </div>
