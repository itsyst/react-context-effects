import { ReactNode } from 'react';
import CartContext from './cartContext';
import { CartContextType, CartType } from './CartType';

interface CartProviderProps {
	children: ReactNode;
}

const CartProvider = ({ children }: CartProviderProps) => {
	// Creating the context value which matches CartContextType
	const carts: CartType[] = [
		{ id: 1, name: 'cart1' },
		{ id: 2, name: 'cart2' }
	];

	const contextValue: CartContextType = {
		carts
	};
	return (
		<CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
	);
};

export default CartProvider;
