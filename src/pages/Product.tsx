import React, {useContext} from 'react';
import {useQuery} from "@tanstack/react-query";
import { useParams, useLoaderData } from 'react-router-dom';
import {productByIdLoader, productByIdQuery} from "../lib/api/queriesLoader";
import {Button} from "../components/ui/Button";
import {ShoppingCart} from "lucide-react";
import {CartContext} from "../lib/providers/CartProvider";

const Product = () => {
    const { addProductToCart } = useContext(CartContext);
    const { id } = useParams();
    const initialData = useLoaderData() as Awaited<
        ReturnType<ReturnType<typeof productByIdLoader>>
        >
    const { data: product } = useQuery({
        ...productByIdQuery(+id), initialData
    });

    return (
        <div className="grid md:grid-cols-2">
            <div className="my-5 h-3/4 w-3/4">
                <img className="h-full object-cover" src={product.image} alt={product.title} />
            </div>
            <div className=" md:w-3/4 flex flex-col my-5">
                <h2 className="font-serif font-bold text-justify">{product.title}</h2>
                <h2 className="font-serif font-semibold">R{product.price}</h2>
                <div className="font-serif text-sm text-justify text-gray-600 whitespace-break-spaces">{product.description}</div>
                <div className="mt-10">
                    <Button size="lg" className="w-full rounded-none" onClick={() => addProductToCart(product)}>
                        <div className="mx-5">Add to cart</div>
                        <ShoppingCart />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Product;
