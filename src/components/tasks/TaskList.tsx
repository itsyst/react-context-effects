import Task from './Task';
import TaskNavbar from './TaskNavbar';
import TaskStatus from './TaskStatus';
import useTaskStore from './store';

const TaskList = () => {
	const { tasks } = useTaskStore();

	return (
		<div>
			<TaskNavbar />
			<div className="row py-4">
				<div className="col-2">
					<TaskStatus />
				</div>
				<div className="col-10">
					<ul className="list-group">
						{tasks.map((task) => (
							<Task key={task.id} task={task} />
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default TaskList;
