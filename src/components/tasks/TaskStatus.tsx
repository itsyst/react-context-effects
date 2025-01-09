import useAuthStore from '../admin/store';
import TaskAdd from './TaskAdd';

const TaskStatus = () => {
	const { user, username, dispatch } = useAuthStore();

	return (
		<>
			{user && <TaskAdd />}
			{!username && user && (
				<button
					onClick={() =>
						dispatch({
							type: 'Login',
							username: '@nishitha_rao'
						})
					}
					className="btn btn-success my-3 p-1"
				>
					Show
				</button>
			)}
			{username && user && (
				<>
					<button
						onClick={() => dispatch({ type: 'Logout' })}
						className="btn btn-secondary my-3 p-1"
					>
						Hide
					</button>
					<p className="text-white">{username}</p>
				</>
			)}
		</>
	);
};

/**
 * Export the TaskStatus component as the default export for this file.
 */
export default TaskStatus;
