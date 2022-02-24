import {ADD_TASK,DELETE_TASK,UPDATE_TASK,FILTER_TASK} from '../Actions/types'
import {tasks} from './state';

let taskReducer= (state=tasks,action)=>{
    let newTasks;
    switch (action.type) {
        case ADD_TASK:
            newTasks = [...state];
            newTasks.push(action.payload);
            return newTasks;

        case FILTER_TASK:
            newTasks=[...state];
            newTasks=newTasks.map((task)=>task.completed!==action.payload.completed)
            return newTasks;


        case DELETE_TASK:
            newTasks=[...state]
            newTasks= newTasks.filter(task=>task.id !== action.payload);
            return newTasks;
        case UPDATE_TASK:
            newTasks=[...state];
            let index = -1;
            for (let i = 0; i < newTasks.length; i++) {
                index++;
                if (newTasks[i].id === action.payload.id) {
                    break;
                }

            }
            if (index !== -1) {
                newTasks[index] = action.payload;
                return newTasks;
            }
            break;
    
        default:
            return state;
    }
}

export default taskReducer