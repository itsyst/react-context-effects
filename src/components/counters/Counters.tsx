import CounterH from './CounterH';
import Counter from './Counter';
import CounterF from './CounterF';

interface CountersProps {
	title: string;
}

const Counters = ({ title }: CountersProps) => {
	return (
		<div className="row pt-4 d-flex align-items-center mt-2 pb-2">
			<div className="d-flex flex-column justify-content-between">
				<h2 className="text-uppercase text-light">{title}</h2>
				<div className="d-flex flex-row">
					<Counter />
					<CounterF />
				</div>
				<CounterH />
			</div>
		</div>
	);
};

export default Counters;
