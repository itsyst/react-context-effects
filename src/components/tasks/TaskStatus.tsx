import { Dispatch } from 'react';
import { Action } from '../admin/reducers/authReducer';
import AddTask from './TaskAdd';
import { TaskAction } from './TasksProvider';

/**
 * Props for TaskStatus component.
 * @interface StatusProps
 * @property {string} user - The current user, empty if not logged in.
 * @property {Dispatch<Action>} onTransmit - Dispatch function for sending authentication actions (Login/Logout).
 * @property {Dispatch<TaskAction>} onDispose - Dispatch function for disposing of tasks.
 */
interface StatusProps {
	user: string;
	onTransmit: Dispatch<Action>;
	onDispose: Dispatch<TaskAction>;
}

/**
 * TaskStatus component displays the user status and buttons to login or logout.
 * - If the user is logged in, it shows the "Hide" button and the user’s name.
 * - If the user is not logged in, it shows the "Show" button.
 * @param {StatusProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered component.
 */
const TaskStatus = ({ user, onTransmit, onDispose }: StatusProps) => {
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

/**
 * Export the TaskStatus component as the default export for this file.
 */
export default TaskStatus;
