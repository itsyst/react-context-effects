import { useContext, useReducer } from 'react';
import authReducer from '../admin/reducers/authReducer';
 import Task from './Task';
import TaskNavbar from './TaskNavbar';
import TaskStatus from './TaskStatus';
import TasksContext from './tasksContext';
 
const TaskList = () => {
	const [user, transmit] = useReducer(authReducer, '');
	const { tasks, dispatch } = useContext(TasksContext);

	return (
		<>
			<TaskNavbar />
			<div className="row py-4">
				<div className="col-2">
					<TaskStatus user={user} onTransmit={transmit} onDispose={dispatch} />
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
