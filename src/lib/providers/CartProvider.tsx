import React, {createContext, ReactNode, useCallback, useEffect, useState} from 'react';
import {Cart, Product} from "../types/types";
import {loadCartFromLocalStorage, saveCartToLocalStorage} from "../utils";

export interface CartContextType {
    cart: Cart | null;
    handleIncrease: (productId: number) => void;
    handleDecrease: (productId: number) => void;
    addProductToCart: (product: Product, quantity?: number) => void;
    handleRemove: (productId: number) => void;
    getCartTotal: () => number;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext<CartContextType | null>(null);
const CartProvider: React.FC<CartProviderProps> = ({children}) => {
    const [cart, setCart] = useState<Cart | null>(null);

    const addProductToCart = useCallback((product: Product, quantity = 1) => {
        setCart(prevCart => {
            if (!prevCart) {
                const newCart: Cart = {
                    id: null,
                    userId: null,
                    date: new Date().toDateString(),
                    products: [{ product, quantity }],
                };
                return newCart;
            } else {
                const existingProductIndex = prevCart.products.findIndex(p => p.product.id === product.id);
                let updatedProducts;

                if (existingProductIndex >= 0) {
                    updatedProducts = prevCart.products.map((p, index) =>
                        index === existingProductIndex ? { ...p, quantity: p.quantity + quantity } : p
                    );
                } else {
                    updatedProducts = [...prevCart.products, { product, quantity }];
                }

                return { ...prevCart, products: updatedProducts };
            }
        });
    }, []);

    const handleIncrease = useCallback((productId: number) => {
        setCart(prevCart => {
            if (!prevCart) return prevCart;
            const updatedProducts = prevCart.products.map(item =>
                item.product.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            );
            return { ...prevCart, products: updatedProducts };
        });
    }, []);

    const handleDecrease = useCallback((productId: number) => {
        setCart(prevCart => {
            if (!prevCart) return prevCart;
            const product = prevCart.products.find(p => p.product.id === productId);
            if (product) {
                if (product.quantity > 1) {
                    const updatedProducts = prevCart.products.map(item =>
                        item.product.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                    );
                    return { ...prevCart, products: updatedProducts };
                } else {
                    return { ...prevCart, products: prevCart.products.filter(p => p.product.id !== productId) };
                }
            }
            return prevCart;
        });
    }, []);

    const getCartTotal = (): number => {
        if (!cart) return 0;
        return cart.products.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };

    const handleRemove = useCallback((productId: number) => {
        setCart(prevCart => {
            if (!prevCart) return prevCart;
            const updatedProducts = prevCart.products.filter(p => p.product.id !== productId);
            return { ...prevCart, products: updatedProducts };
        });
    }, []);

    useEffect(() => {
        try {
            const storedCart = loadCartFromLocalStorage();
            if (storedCart) {
                setCart(storedCart);
            }
        } catch (error) {
            console.error('Failed to load cart from local storage:', error);
        }
    }, []);

    useEffect(() => {
        if (cart) {
            try {
                saveCartToLocalStorage(cart);
            } catch (error) {
                console.error('Failed to save cart to local storage:', error);
            }
        }
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addProductToCart, handleRemove, handleIncrease, handleDecrease, getCartTotal }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
