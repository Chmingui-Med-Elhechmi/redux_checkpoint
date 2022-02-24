import { ADD_TASK,DELETE_TASK,FILTER_TASK,UPDATE_TASK } from "./types";

export function addTask(task){
    return{
        type:ADD_TASK,
        payload:task,
    }
}

export function deleteTask(taskId) {
    return {
        type:DELETE_TASK,
        payload: taskId,
    }
}


export function updateTask(task) {
    return {
        type:UPDATE_TASK,
        payload: task,
    }
}

export function filterTask(task){
    return {
        type:FILTER_TASK,
        payload:task,
    }
}