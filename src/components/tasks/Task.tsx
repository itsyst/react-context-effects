import { Dispatch } from 'react';
import { TaskType } from './TaskType';
import { TaskAction } from './TasksProvider';

/**
 * TaskProps interface defines the expected props for the Task component.
 * @property task - The task object containing details like id and title.
 * @property onDispatch - A dispatch function to trigger actions in the task provider (such as DELETE).
 */
interface TaskProps {
	task: TaskType;
	onDispatch: Dispatch<TaskAction>;
}

/**
 * Task component that displays a task item with a title and a delete button.
 * 
 * @param task - A task object to display in the list.
 * @param onDispatch - A function to dispatch actions, such as deleting a task.
 * @returns JSX element representing the task item with a delete button.
 */
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
