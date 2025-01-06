import { useContext } from 'react';
import CartContext from '../../context/cartContext';
import { CartContextType } from '../../types/CartType';

const Carts = () => {
	const cartContext = useContext<CartContextType | undefined>(CartContext);

	return (
		<div>
			<ul className="list-unstyled">
				{cartContext?.carts.map((item) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</div>
	);
};

export default Carts;
