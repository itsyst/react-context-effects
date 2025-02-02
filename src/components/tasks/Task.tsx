import useTaskStore from './store';
import { TaskType } from './TaskType';

const Task = ({ task }: { task: TaskType }) => {
	const { deleteTask } = useTaskStore();
	return (
		<li key={task.id} className="list-group-item d-flex justify-content-between rounded-pill mb-2">
			<span className="flex-grow-1 align-self-center text-red">{task.title}</span>
			<button
				className="btn btn-outline-danger"
				onClick={() => deleteTask(task.id)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					className="bi bi-trash-fill"
					viewBox="0 0 16 16"
				>
					<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
				</svg>
			</button>
		</li>
	);
};

export default Task;
