import { useContext } from 'react';
import CartContext from '../cart/contexts/cartContext';
import { CartType } from '../cart/types/CartType';

const TaskCarts = () => {
	const cartContext = useContext(CartContext);

	return (
		<div>
			<ul className="list-unstyled">
				{cartContext?.carts.map((item:CartType) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</div>
	);
};

export default TaskCarts;
