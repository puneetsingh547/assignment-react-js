import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList ";

export default function TodoApp() {
  const [todoArrList, setTodoArrList] = useState([]);
  const [filterValues, setFilteredItems] = useState([]);
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    if (todoArrList[todoArrList.length - 1]?.todo) {
      sessionStorage.setItem("todoList", JSON.stringify(todoArrList));
    }
    console.log("todoArrList ", todoArrList);
  }, [todoArrList]);

  useEffect(() => {
    const listItems = sessionStorage.getItem("todoList");
    if (listItems) {
      let list = JSON.parse(listItems);
      setTodoArrList(list);
      setFilteredItems(list);
    }
  }, []);

  useEffect(() => {
    setFilteredItems(
      todoArrList.filter((item) => {
        if (filterType == "all") return true;
        else if (filterType == "pending") {
          return item.completed == false;
        } else if (filterType == "completed") return item.completed == true;
      })
    );
  }, [filterType, todoArrList]);

  const handleSelect = (e) => {
    setFilterType(e.target.value);
  };

  return (
    <>
      <select
        style={{ padding: "15px" }}
        value={filterType}
        onChange={(e) => {
          handleSelect(e);
        }}
      >
        <option value={"all"}>All</option>
        <option value={"pending"}>Pending</option>
        <option value={"completed"}>Completed</option>
      </select>
      <TodoList
        todoArrList={todoArrList}
        filterValues={filterValues}
        setTodo={setTodoArrList}
      />
      <AddTodo todoArrList={todoArrList} setTodo={setTodoArrList} />
    </>
  );
}
