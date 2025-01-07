import { TaskType } from "../../types/TaskType";

interface AddTask {
    type: 'ADD',
    task: TaskType
}

interface DeleteTask {
    type: 'DELETE',
    taskId: number
}

type TaskAction = AddTask | DeleteTask;

const tasksReducer = (tasks: TaskType[], action: TaskAction): TaskType[] => {
    switch (action.type) {
        case 'ADD':
            return [action.task, ...tasks]
        case 'DELETE':
            return tasks.filter((t) => t.id !== action.taskId)
    }
}

export default tasksReducer;