import { createContext, Dispatch } from "react";
import { TaskType } from "../types/TaskType";
import { TaskAction } from "../reducers/tasksReducer";

export interface TaskContextType {
    tasks: TaskType[];
    dispatch: Dispatch<TaskAction>
}

const TasksContext = createContext<TaskContextType>({} as TaskContextType);
export default TasksContext;