import { useReducer } from 'react';
import tasksReducer from '../reducers/tasksReducer';
import authReducer from '../reducers/authReducer';
import Task from './Task';
import Status from './Status';

const TaskList = () => {
	const [tasks, dispatch] = useReducer(tasksReducer, []);
	const [user, transmit] = useReducer(authReducer, '');

	return (
		<div className="row bg-dark py-4">
			<div className="col-2">
				<Status user={user} onTransmit={transmit} onDispose={dispatch} />
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
