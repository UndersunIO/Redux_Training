import { useSelector } from "react-redux";
import { RootState } from "../application/store";
import { useState } from "react";

const FinishedTasks: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.todos);
  const [isListVisible, setIsListVisible] = useState(false);

  const finishedTasks = tasks.filter((task) => task.isCompleted);
  const finishedTasksCount = finishedTasks.length;

  const handleToggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <div>
      <h2>Finished tasks: {finishedTasksCount}</h2>
      <button onClick={handleToggleListVisibility}>
        {isListVisible ? "Hide" : "Show"} list
      </button>
      {isListVisible && (
        <ul>
          {finishedTasks.map((task) => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FinishedTasks;
