import { Container, Navbar } from 'react-bootstrap';
import useTasks from '../tasks/hooks/useTasks';
import image from '../../assets/icon.png';

const TaskNavbar = () => {
	const { tasks } = useTasks();
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
					/>{' '}
					<span>Tasks Count</span>
					<span className="badge text-bg-secondary ms-2">{tasks.length}</span>
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

export default TaskNavbar;
