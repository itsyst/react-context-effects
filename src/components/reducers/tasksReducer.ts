import { TaskType } from "../../types/TaskType";

interface AddTask {
    type: 'ADD',
    task: TaskType
}

interface DeleteTask {
    type: 'DELETE',
    taskId: number
}

export type TaskAction = AddTask | DeleteTask;

const tasksReducer = (tasks: TaskType[], action: TaskAction): TaskType[] => {
    switch (action.type) {
        case 'ADD':
            // Add the new task to the beginning of the array
            return [action.task, ...tasks];
        case 'DELETE':
            // Remove the task with the matching ID
            return tasks.filter((task) => task.id !== action.taskId);
        default:
            // Handle any unexpected action types by returning the current state
            return tasks;
    }
}

export default tasksReducer;