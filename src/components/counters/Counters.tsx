import Counter from './Counter';
import CounterF from './CounterF';
import CounterH from './CounterH';

const Counters = () => {
	return (
		<div className="pt-4 d-flex align-items-center mt-2 pb-2">
			<div className="d-flex flex-column col-12">
				<Counter />
				<CounterF />
				<CounterH />
			</div>
		</div>
	);
};

export default Counters;
