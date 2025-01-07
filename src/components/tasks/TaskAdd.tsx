import { Dispatch } from 'react';
import { TaskAction } from '../reducers/tasksReducer';

interface AddTaskProps {
	onDispose: Dispatch<TaskAction>;
}

const TaskAdd = ({ onDispose }: AddTaskProps) => {
	return (
		<button
			onClick={() =>
				onDispose({
					type: 'ADD',
					task: { id: Date.now(), title: 'Task' + Date.now() }
				})
			}
			className="btn btn-primary my-3 me-2"
		>
			Add Task
		</button>
	);
};

export default TaskAdd;
