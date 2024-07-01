import React, {createContext, useEffect, useState} from 'react';
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

export const CartContext = createContext<CartContextType | null>(null);
const CartProvider = ({children}) => {
    const [cart, setCart] = useState<Cart | null>(null);

    const addProductToCart = (product: Product, quantity = 1) => {
        if (!cart) {
            // Create a new cart
            const newCart: Cart = {
                id: null,
                userId: null,
                date: new Date().toDateString(),
                products: [{ product, quantity }]
            };
            setCart(newCart);
        } else {
            // Check if the product already exists in the cart
            const existingProductIndex = cart.products.findIndex(p => p.product.id === product.id);
            let updatedProducts;

            if (existingProductIndex >= 0) {
                // Update quantity of existing product
                updatedProducts = cart.products.map((p, index) =>
                    index === existingProductIndex ? { ...p, quantity: p.quantity + quantity } : p
                );
            } else {
                // Add new product to cart
                updatedProducts = [...cart.products, { product, quantity }];
            }

            setCart({ ...cart, products: updatedProducts });
        }
    };

    const handleIncrease = (productId: number) => {
        if (cart) {
            const updated = cart.products.map(item => item.product.id === productId ? {...item, quantity: item.quantity + 1}: item);
            setCart({ ...cart, products: updated});
        }
    }

    const handleDecrease = (productId: number) => {
        if (cart) {
            const product = cart.products.find(p => p.product.id === productId);
            if (product) {
                if (product.quantity > 1) {
                    const updatedProducts = cart.products.map(item =>
                        item.product.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                    );
                    setCart({ ...cart, products: updatedProducts });
                } else {
                    handleRemove(productId);
                }
            }
        }
    };

    const getCartTotal = (): number => {
        if (!cart) return 0;
        return cart.products.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };

    const handleRemove = (productId: number) => {
        if (cart) {
            const updatedProducts = cart.products.filter(p => p.product.id !== productId);
            setCart({ ...cart, products: updatedProducts });
        }
    };

    useEffect(() => {
        const storedCart = loadCartFromLocalStorage();
        if (storedCart) {
            setCart(storedCart);
        }
    }, [])

    useEffect(() => {
        if (cart) {
            saveCartToLocalStorage(cart);
        }
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addProductToCart, handleRemove, handleIncrease, handleDecrease, getCartTotal }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
