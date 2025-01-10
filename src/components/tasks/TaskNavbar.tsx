import { Link } from 'react-router';
import image from '../../assets/icon.png';
import useTaskStore from './store';

const TaskNavbar = () => {
	// Extracting the tasks array from the TasksContext using the useContext hook
	const { tasks } = useTaskStore();

	return (
		<div className="bg-white p-2 rounded-pill">
			<div className="container">
				<nav className='d-flex align-items-center'>
					<Link to="/tasks" className='text-decoration-none text-dark'>
						<img
							alt=""
							src={image}
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>
						<span>Tasks Count</span>
						<span className="badge text-bg-secondary ms-2">{tasks.length}</span>
					</Link>
				</nav>
			</div>
		</div>
	);
};

export default TaskNavbar;
