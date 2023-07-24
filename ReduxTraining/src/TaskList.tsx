import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { removeTodo } from "./todoSlice";

const TaskList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.name}
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
