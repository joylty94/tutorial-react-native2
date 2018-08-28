import { ADD_NEW_TASK, TOGGLE_ONE_TASK } from './actionTypes';
let newTaskId = 0;

export const addNEWTASK = (inputTaskName) => {
  return{
    type: ADD_NEW_TASK,
    taskId: newTaskId,
    taskName: inputTaskName,
  }
}

export const toggleTask = (teskId) => {
  return{
    type: TOGGLE_ONE_TASK,
    taskId: taskId
  }
}
