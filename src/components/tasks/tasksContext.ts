import { createContext, Dispatch } from "react";
import { TaskType } from "./TaskType";
import { TaskAction } from "./TasksProvider";

/**
 * @interface TaskContextType
 * Defines the structure of the context for tasks.
 * Contains the tasks array and the dispatch function.
 */
export interface TaskContextType {
    tasks: TaskType[]; // Array of task objects
    dispatch: Dispatch<TaskAction>; // Dispatch function to handle task actions
}

/**
 * @constant TasksContext
 * The context object that provides access to tasks and dispatch.
 * This is used to share the task data and actions throughout the component tree.
 */
const TasksContext = createContext<TaskContextType>({} as TaskContextType);

export default TasksContext;
