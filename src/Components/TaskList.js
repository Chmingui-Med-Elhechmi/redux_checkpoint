import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'

function TaskList() {
    let tasks = useSelector(state=>state.taskReducer)
  return (
    <div>
        {tasks.map((task)=>{
            return <TaskItem key={task.id} task={task}/>
        })}
    </div>
  )
}

export default TaskList