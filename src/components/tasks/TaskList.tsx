import { useReducer } from 'react';
import tasksReducer from '../reducers/tasksReducer';
import authReducer from '../reducers/authReducer';
import Task from './Task';

const TaskList = () => {
	const [tasks, dispatch] = useReducer(tasksReducer, []);
	const [user, transmit] = useReducer(authReducer, '');

	return (
		<div className="row bg-dark py-4">
			<div className="col-2">
				<button
					onClick={() =>
						dispatch({
							type: 'ADD',
							task: { id: Date.now(), title: 'Task' + Date.now() }
						})
					}
					className="btn btn-primary my-3"
				>
					Add Task
				</button>
				{!user && (
					<button
						onClick={() =>
							transmit({ type: 'Login', username: '@SurrealSunsets' })
						}
						className="btn btn-success my-3 p-1"
					>
						Show
					</button>
				)}
				{user && (
					<>
						<button
							onClick={() => transmit({ type: 'Logout' })}
							className="btn btn-secondary my-3 p-1"
						>
							Hide
						</button>
						<p className="text-white">{user}</p>
					</>
				)}
			</div>
			<div className="col-10">
				<ul className="list-group">
					{tasks.map((task) => (
						<Task key={task.id} task={task} onDispatch={dispatch} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default TaskList;
