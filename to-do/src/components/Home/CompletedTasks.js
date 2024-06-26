import React from 'react'
import './CompletedTasks.css'
import TaskCard from './TaskCard'

const CompletedTasks = ({taskData, setTaskData}) => {
  return (
    <>
    <div id='parent-div'>
      <div>
        <p id='container-div'>Completed Tasks</p>
        <div id='task-card-parent'>
                {
                    taskData.filter((taskInfo)=>taskInfo.status==="completed").map((taskInfo)=>{
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

export default CompletedTasks