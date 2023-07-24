import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

const AddTask: React.FC = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(addTodo(name));
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.currentTarget.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
