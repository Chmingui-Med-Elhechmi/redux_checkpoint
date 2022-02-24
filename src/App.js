import './App.css';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';
import TasksFilter from './Components/TasksFilter';

function App() {
  return (
    <div className="App">
      <TaskInput />
      <TaskList />
      <TasksFilter />
    </div>
  );
}

export default App;
