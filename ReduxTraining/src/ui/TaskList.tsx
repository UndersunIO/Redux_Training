import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../application/store";
import { removeTodo, finishTodo } from "../domain/todoSlice";

const TaskList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(removeTodo(id));
  };

  const handleFinish = (id: number) => {
    dispatch(finishTodo(id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{
              textDecoration: todo.isCompleted ? "line-through" : "none",
            }}
          >
            {todo.name}
          </span>
          <button onClick={() => handleFinish(todo.id)}>
            {todo.isCompleted ? "Cancel" : "Complete"}
          </button>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
