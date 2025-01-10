import Counter from './Counter';
import CounterF from './CounterF';
import CounterH from './CounterH';

interface CountersProps {
	title: string;
}

const Counters = ({ title }: CountersProps) => {
	return (
		<div className="pt-4 d-flex align-items-center mt-2 pb-2">
			<div className="d-flex flex-column col-12">
				<h2 className="text-uppercase text-light mb-5">{title}</h2>
				<Counter />
				<CounterF />
				<CounterH />
			</div>
		</div>
	);
};

export default Counters;
