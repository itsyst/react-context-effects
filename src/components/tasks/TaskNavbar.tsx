import { useContext } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import image from '../../assets/icon.png';
import TasksContext from './tasksContext';

const TaskNavbar = () => {
	// Extracting the tasks array from the TasksContext using the useContext hook
	const { tasks } = useContext(TasksContext);

	return (
		<Navbar className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="#">
					<img
						alt=""
						src={image}
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>
					<span>Tasks Count</span>
					<span className="badge text-bg-secondary ms-2">{tasks.length}</span>
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

export default TaskNavbar;
