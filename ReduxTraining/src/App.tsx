import AddTask from "./application/AddTask";
import TaskList from "./ui/TaskList";
import FinishedTask from "./ui/FinishedTask";
import "./App.css";

const App: React.FC = () => {
  return (
    <main className="container">
      <div className="display">
        <h1 className="header">TodoAppTS Day001 with RTK</h1>
        <AddTask />
        <TaskList />
      </div>
      <FinishedTask />
    </main>
  );
};

export default App;
