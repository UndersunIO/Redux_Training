import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

const App: React.FC = () => {
  return (
    <main className="container">
      <h1 className="header">Todo List Day 001</h1>
      <AddTask />
      <TaskList />
    </main>
  );
};

export default App;
