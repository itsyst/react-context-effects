import { Dispatch } from 'react';
import { TaskType } from '../tasks/types/TaskType';
import { TaskAction } from '../tasks/reducers/tasksReducer';
 
interface TaskProps {
	task: TaskType;
	onDispatch: Dispatch<TaskAction>;
}

const Task = ({ task, onDispatch }: TaskProps) => {
	return (
		<li key={task.id} className="list-group-item d-flex justify-content-between">
			<span className="flex-grow-1 align-self-center">{task.title}</span>
			<button
				className="btn btn-outline-danger"
				onClick={() => onDispatch({ type: 'DELETE', taskId: task.id })}
			>
				Delete
			</button>
		</li>
	);
};

export default Task;
