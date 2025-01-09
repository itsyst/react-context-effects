import { createContext } from 'react'
import { CartContextType } from './CartType';

const CartContext = createContext<CartContextType>({} as CartContextType);
CartContext.displayName = "CartContext";

export default CartContext;
