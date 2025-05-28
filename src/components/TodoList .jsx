import TodoItem from "./TodoItem ";

export default function TodoList({ todoArrList, filterValues, setTodo }) {
  const handleDeleteItem = (id) => {
    let finalItem = todoArrList.filter((item) => item.id !== id);
    setTodo(finalItem);
  };

  return (
    <>
      <ul>
        {filterValues.map((item) => (
          <li key={item.id}>
            <div className="list-content">
              <input
                checked={item.completed}
                type="checkbox"
                onChange={(e) =>
                  setTodo((lists) => {
                    return lists.map((l) => {
                      if (l.id == item.id) {
                        return { ...l, completed: e.target.checked };
                      }
                      return l;
                    });
                  })
                }
              />
              <TodoItem value={item.todo} />
            </div>
            <button
              className="button-delete"
              onClick={() => handleDeleteItem(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
