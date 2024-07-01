import React, { useContext } from 'react';
import { ShoppingCart } from 'lucide-react';
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from './Sheet';
import { CartContext } from '../../lib/providers/CartProvider';
import CartItem, {CartItemProps} from './CartItem';

interface CartDetailsProps {
    cartItems: CartItemProps[];
    itemCount: number;
    total: number;
    getItemCount: (count: number) => string;
}

const Cart: React.FC = () => {
    const { cart, getCartTotal } = useContext(CartContext);
    const itemCount = cart?.products.reduce((sum, product) => sum + product.quantity, 0) || 0;
    const total = getCartTotal();

    const getItemCount = (count: number) => {
        if (count > 1000) {
            return (count / 1000).toFixed(1) + 'k';
        }
        return count.toString();
    };

    return <CartDetails cartItems={cart?.products} itemCount={itemCount} total={total} getItemCount={getItemCount} />;
};

const CartDetails: React.FC<CartDetailsProps> = ({ cartItems = [] as CartItemProps[], itemCount, total, getItemCount }) => (
    <Sheet>
        <SheetTrigger asChild>
            <div className="relative">
                <ShoppingCart />
                {itemCount > 0 && (
                    <span
                        className="absolute top-0 right-0 transform translate-x-1/2
                                  -translate-y-1/2 bg-red-500 text-white text-xs
                                  font-bold rounded-full h-5 w-5 flex items-center justify-center"
                        data-testid="item-count"
                    >
            {getItemCount(itemCount)}
          </span>
                )}
            </div>
        </SheetTrigger>
        <SheetContent side="right" className="w-[400px] sm:w-[540px]">
            <SheetHeader>
                <SheetTitle>Cart</SheetTitle>
            </SheetHeader>
            <SheetDescription />
            <div className="h-full flex flex-col">
                {!itemCount && (
                    <div className="flex flex-col justify-center h-full mx-4" data-testid="empty-cart-message">
                        <h1 className="flex justify-center font-semibold text-lg text-gray-600">
                            Your cart is empty
                        </h1>
                        <div className="flex justify-center content-around text-black text-xs">
                            When you add products, they will appear here. Start shopping now...
                        </div>
                    </div>
                )}
                {!!itemCount && (
                    <div className="flex flex-col h-full justify-between my-4" data-testid="cart-items">
                        <div className="h-full">
                            {cartItems.map((item) => (
                                <CartItem key={item.product.id} product={item.product} quantity={item.quantity} />
                            ))}
                        </div>
                        <div>
                            <div className="text-lg font-semibold text-gray-700" data-testid="cart-total">
                                Total: ${total.toFixed(2)}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </SheetContent>
    </Sheet>
);

export default Cart;
