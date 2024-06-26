import React from 'react'
import './PendingTasks.css'
import TaskCard from './TaskCard'

const PendingTasks = ({taskData, setTaskData}) => {
  return (
    <>
    <div id='parent-div'>
      <div>
        <p id='container-div'>Pending Tasks</p>
        <div id='task-card-parent'>
                {
                  taskData.filter((taskInfo)=>taskInfo.status==="pending").map((taskInfo)=>{
                    const {task, id, priority, status} = taskInfo
                    return  <TaskCard setTaskData={setTaskData} data={{task: task, priority: priority, status: status, id: id}}/>
                  })
                }
        </div>
      </div>
    </div>
    </>
  )
}

export default PendingTasks
