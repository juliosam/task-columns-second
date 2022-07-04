import './App.css';
import { TaskProcessColumn } from './components/taskProcessColumn';
import { useState } from 'react';

function App() {
const [taskList, setTaskList] = useState<string[]>([]);
const [task, setTask] = useState<string>("");
const writing = (e:any) =>{
  setTask(e.target.value)
  }
  console.log(taskList)

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log("task added")
      setTaskList([...taskList,task])
      setTask("")
  }
  return (
    <div className="App">
      <TaskProcessColumn taskList={taskList} setTaskList={setTaskList}/>
      <form className="task-adder" onSubmit={addTask}>
        <input required onChange={writing} value={task}/>
        <button>Add Task</button>
      </form>
    </div>
  );
}

export default App;
