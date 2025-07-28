import { useContext } from "react";
import { TodayContext } from "../../contexts/TodayContext";

function TodoItem({ todo }) {
  const { todos, dispatch } = useContext(TodayContext);
  return (
    <div>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={() => dispatch({ type: "toggle", payload: todo.id })}
      >
        {todo.text}
      </span>
      {todo.text}
      <button onClick={() => dispatch({ type: "delete", payload: todo.id })}>
        삭제
      </button>
    </div>
  );
}

export default TodoItem;
