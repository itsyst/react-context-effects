import {createContext} from 'react'
import { CartContextType } from '../types/CartType';

const CartContext = createContext<CartContextType | undefined>(undefined);
CartContext.displayName = "CartContext";

export default CartContext;
