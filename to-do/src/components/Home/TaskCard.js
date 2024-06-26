import React from 'react'
import "./TaskCard.css"
import {Button} from "antd"

const TaskCard = (props) => {
    
  const { data : {task, priority, id, status}, setTaskData} = props  
  
  const completeHandler = () => {
    setTaskData((prevValue)=>{
      const newTaskData = [...prevValue]
      return newTaskData.map((taskInfo)=>{
        if(taskInfo.id===id){
          return {...taskInfo,status : 'completed'}
        }
        return taskInfo
      })
    })
  }
  
  const removeHandler = () => {
    setTaskData((prevValue)=>{
      const newTaskData = [...prevValue]
      return newTaskData.filter((taskInfo)=>{
        return taskInfo.id!==id
      })
    })
  }
  return (
    <div id='task-card-container' className={status==="pending" ? "pending" : "completed"}>
        <p><b>Task</b></p>
        <p id='tk'>{task}</p>
        <em><p id='pty'>{priority}</p></em>
        <div id='btn'>
         <Button onClick={completeHandler} type="primary">Complete</Button>
        </div>
        <div id='btn2'>
         <Button onClick={removeHandler} type='danger'>x</Button>
        </div>
    </div>
  )
}

export default TaskCard