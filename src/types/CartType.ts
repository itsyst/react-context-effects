export interface CartType {
    id: number;
    name: string;
}

export interface CartContextType {
    carts: CartType[] | [];
}