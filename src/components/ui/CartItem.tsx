import React, {useContext} from "react";
import {Product} from "../../lib/types/types";
import {CartContext} from "../../lib/providers/CartProvider";
import {Minus, Plus, Trash} from "lucide-react";

export interface CartItemProps {
    product: Product;
    quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ product, quantity }) => {
    const { handleIncrease, handleDecrease, handleRemove } = useContext(CartContext);

    return (
        <div className="flex items-center  p-4 border-b border-gray-300 min-h-1/5">
            <img src={`${product.image}`} className="w-16 h-20 object-cover rounded" />
            <div className="flex-1 ml-4 text-xs font-semibold">
                <h3>{product.title}</h3>
                <p className="text-gray-600 font-semibold">R{product.price}</p>
            </div>
            <div className="flex items-center">
                <button
                    onClick={() => handleDecrease(product.id)}
                    className="text-gray-600 hover:text-gray-800 p-1"
                >
                    <Minus size={15} />
                </button>
                <span className="mx-2 text-sm">{quantity}</span>
                <button
                    onClick={() => handleIncrease(product.id)}
                    className="text-gray-600 hover:text-gray-800 p-1"
                >
                    <Plus size={15} />
                </button>
            </div>
            <button
                onClick={() => handleRemove(product.id)}
                className="text-red-600 hover:text-red-800 ml-4"
            >
                <Trash size={15} />
            </button>
        </div>
    );
}

export default CartItem;