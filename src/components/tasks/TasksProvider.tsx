import { ReactNode, useReducer } from 'react';

// Reducer
import { TaskType } from './TaskType';
import TasksContext, { TaskContextType } from './tasksContext';

// Action type for adding a task
interface AddTask {
	type: 'ADD';
	task: TaskType;
}

// Action type for deleting a task
interface DeleteTask {
	type: 'DELETE';
	taskId: number;
}

// Union type of possible task actions
export type TaskAction = AddTask | DeleteTask;

/**
 * The reducer function for managing tasks state.
 * @param tasks - The current array of tasks.
 * @param action - The action object that specifies the type of operation (ADD or DELETE).
 * @returns A new array of tasks after the operation is performed.
 */
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
};

/**
 * Interface for the props of the TasksProvider component.
 * @param children - The components that will be wrapped by this provider.
 */
interface TasksProviderProps {
	children: ReactNode;
}

/**
 * The context provider component for managing task state.
 * @param children - The components that will be wrapped by this provider.
 * @returns The provider component that supplies task state and dispatch function to child components.
 */
const TasksProvider = ({ children }: TasksProviderProps) => {
	// Using the useReducer hook to manage the tasks state
	const [tasks, dispatch] = useReducer(tasksReducer, []);

	// Creating the context value which matches TaskContextType
	const contextValue: TaskContextType = {
		tasks,
		dispatch
	};

	return (
		<TasksContext.Provider value={contextValue}>
			{children}
		</TasksContext.Provider>
	);
};

export default TasksProvider;
