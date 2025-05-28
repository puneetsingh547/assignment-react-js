import { useState } from "react";

export default function AddTodo({ setTodo }) {
  const [todoVal, setTodoVal] = useState("");

  const handleAddTodo = () => {
    if (!todoVal) return;
    let list = sessionStorage.getItem("todoList");
    if (!list) {
      setTodo([{ completed: false, id: 0, todo: todoVal }]);
      setTodoVal("");
    } else {
      let jsonList = JSON.parse(list);
      setTodo((item) => [
        ...item,
        {
          completed: false,
          id: jsonList[jsonList.length - 1].id + 1,
          todo: todoVal,
        },
      ]);
      setTodoVal("");
    }
  };
  return (
    <div>
      <input value={todoVal} onChange={(e) => setTodoVal(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}
