import { useContext } from 'react';
import { CartType } from './CartType';
import CartContext from './cartContext';

const TaskCarts = () => {
	const cartContext = useContext(CartContext);

	return (
		<div>
			<ul className="list-unstyled">
				{cartContext?.carts.map((item: CartType) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</div>
	);
};

export default TaskCarts;
