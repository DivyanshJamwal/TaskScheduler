import React, {useState} from 'react'
import TaskForm from '../components/Home/TaskForm'
import './Home.css'
import PendingTasks from '../components/Home/PendingTasks'
import CompletedTasks from '../components/Home/CompletedTasks'

const Home = () => {

  const [taskData,setTaskData] = useState([])
  return (
    <div>
      <TaskForm setTaskData={setTaskData}/>
      <PendingTasks setTaskData={setTaskData} taskData={taskData} />
      <CompletedTasks setTaskData={setTaskData} taskData={taskData}/>
      
    </div>
  )
}

export default Home

