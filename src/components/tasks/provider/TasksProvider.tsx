import { ReactNode, useReducer } from 'react';
import TasksContext, { TaskContextType } from '../contexts/tasksContext';
import tasksReducer from '../reducers/tasksReducer';

interface TasksProviderProps {
	children: ReactNode;
}

const TasksProvider = ({ children }: TasksProviderProps) => {
	const [tasks, dispatch] = useReducer(tasksReducer, []);

	// Creating the context value which matches UserContextType
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
