import { useContext, useReducer } from 'react';
import authReducer from '../reducers/authReducer';
import Task from './Task';
import Status from './Status';
import NavbarTask from './NavbarTask';
import TasksContext from '../../contexts/tasksContext';

const TaskList = () => {
	const [user, transmit] = useReducer(authReducer, '');
	const { tasks, dispatch } = useContext(TasksContext);

	return (
		<>
			<NavbarTask />
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
		</>
	);
};

export default TaskList;
