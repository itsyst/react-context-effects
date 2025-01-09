import useTaskStore from './store';

const TaskAdd = () => {
	const { addTask } = useTaskStore();
  
	return (
		<button
			onClick={() => addTask({ id: Date.now(), title: 'Task ' + Date.now() })}
			className="btn btn-primary my-3 me-2"
		>
			Add Task
		</button>
	);
};

export default TaskAdd;
