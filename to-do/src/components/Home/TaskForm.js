import React, {useState} from 'react'
import './TaskForm.css'
import {Button,Input,Select} from "antd"

const TaskForm = ({setTaskData}) => {

    const [task,setTask] = useState("")

    const [priority,setPriority] = useState('high')
    function generateUniqueId() {
        return Math.random().toString(36).substr(2, 6);
      }
      function addTaskHandler(){
        const taskInfo = {
            task : task,
            priority : priority,
            status : "pending",
            id : generateUniqueId()
        }
        setTaskData((prevValue)=>{
          const data = [...prevValue]
          data.push(taskInfo)
          return data
        })
      }
  return (
    <>
    <div id='parent-container'>
    <div className='container'>
    <p id='heading'>Task Scheduler</p>
    <Input onChange={(e)=>{
        setTask(e.target.value)
    }} placeholder="Enter the Task..." allowClear />
    <Select
      defaultValue="High"
      style={{
        width: 120,
      }}
      placeholder="Choose Priority"
      onChange={(value)=>{
        setPriority(value)
      }}
      options={[
        {
          value: 'high',
          label: 'High',
        },
        {
          value: 'medium',
          label: 'Medium',
        },
        {
          value: 'low',
          label: 'Low',
        },
      ]}
    />
      <Button onClick={addTaskHandler} type="primary">ADD TASK</Button>
    </div>
    </div>
    
    </>
  )
}

export default TaskForm