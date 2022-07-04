import { useState } from "react";

interface Props {
    taskList: string[];
    setTaskList:React.Dispatch<React.SetStateAction<string[]>>;
}

export const TaskProcessColumn = ({taskList,setTaskList}:Props) =>{

    const [inProgressList, setInProgressList] = useState<string[]>([]);
    const [doneList, setDoneList] = useState<string[]>([]);
    
    const handleBack = (e: React.MouseEvent<HTMLButtonElement>)=>{
        if(e.currentTarget.classList.contains("back-done")){
            setInProgressList([...inProgressList, e.currentTarget.value])
            const newList = doneList.filter(item => item !== e.currentTarget.value)
            setDoneList(newList)
        }
        if(e.currentTarget.classList.contains("back-inProgress")){
            setTaskList([...taskList, e.currentTarget.value])
            const newList = inProgressList.filter(item => item !== e.currentTarget.value)
            setInProgressList(newList)
        }
    }

    const handleForward = (e: React.MouseEvent<HTMLButtonElement>)=>{
        if(e.currentTarget.classList.contains("forward-todo")){
            setInProgressList([...inProgressList, e.currentTarget.value])
            const newList = taskList.filter(item => item !== e.currentTarget.value)
            setTaskList(newList)
        }
        if(e.currentTarget.classList.contains("forward-inProgress")){
            setDoneList([...doneList, e.currentTarget.value])
            const newList = inProgressList.filter(item => item !== e.currentTarget.value)
            setInProgressList(newList)
        }
    }
    return(
  <div className="column-container">
    <div className="column">
      <h2>To Do</h2>
      <ul>
        {taskList.map((task:string)=>{
          return(
          <li>
            <div>
              <button className="back-todo bb" disabled onClick={handleBack}>⬅</button>
              <p>{task}</p>
              <button className="forward-todo bf" value={task} onClick={handleForward}>➡</button>
            </div>  
          </li>
          )
        })}
      </ul>
    </div>
    <div className="column">
      <h2>In Progress</h2>
      <ul>
        {inProgressList.map((task:string)=>{
          return(
          <li>
            <div>
              <button className="back-inProgress bb" value={task} onClick={handleBack}>⬅</button>
              <p>{task}</p>
              <button className="forward-inProgress bf" value={task} onClick={handleForward}>➡</button>
            </div>  
          </li>
          )
        })}
      </ul>
    </div>
    <div className="column">
      <h2>Done</h2>
      <ul>
        {doneList.map((task:string)=>{
          return(
          <li>
            <div>
              <button className="back-done bb" value={task} onClick={handleBack}>⬅</button>
              <p>{task}</p>
              <button className="forward-done bf" disabled onClick={handleForward}>➡</button>
            </div>  
          </li>
          )
        })}
      </ul>
    </div>
  </div>
    )
}