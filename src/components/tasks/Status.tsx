import { Dispatch } from 'react';
import { Action } from '../reducers/authReducer';
import AddTask from './AddTask';
import { TaskAction } from '../reducers/tasksReducer';

interface StatusProps {
	user: string;
	onTransmit: Dispatch<Action>;
	onDispose: Dispatch<TaskAction>;
}

const Status = ({ user, onTransmit, onDispose }: StatusProps) => {
	return (
		<>
			<AddTask onDispose={onDispose} />
			{!user && (
				<button
					onClick={() =>
						onTransmit({ type: 'Login', username: '@SurrealSunsets' })
					}
					className="btn btn-success my-3 p-1"
				>
					Show
				</button>
			)}
			{user && (
				<>
					<button
						onClick={() => onTransmit({ type: 'Logout' })}
						className="btn btn-secondary my-3 p-1"
					>
						Hide
					</button>
					<p className="text-white">{user}</p>
				</>
			)}
		</>
	);
};

export default Status;
