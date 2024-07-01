import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams, useLoaderData } from 'react-router-dom';
import { productByIdLoader, productByIdQuery } from '../lib/api/queriesLoader';
import { Button } from '../components/ui/Button';
import { ShoppingCart } from 'lucide-react';
import { CartContext } from '../lib/providers/CartProvider';
import { Product as ProductType } from '@/lib/types/types';

interface ProductDetailsProps {
    product: ProductType;
}

const Product: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const initialData = useLoaderData() as Awaited<ReturnType<ReturnType<typeof productByIdLoader>>>;
    const { data: product } = useQuery({
        ...productByIdQuery(Number(id)),
        initialData,
    });

    return <ProductDetails product={product} />;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const { addProductToCart } = useContext(CartContext);

    return (
        <div className="grid md:grid-cols-2">
            <div className="my-5 h-3/4 w-3/4">
                <img className="h-full object-cover" src={product.image} alt={product.title} data-testid="product-image" />
            </div>
            <div className="md:w-3/4 flex flex-col my-5">
                <h2 className="font-serif font-bold text-justify" data-testid="product-title">{product.title}</h2>
                <h2 className="font-serif font-semibold" data-testid="product-price">R{product.price}</h2>
                <div className="font-serif text-sm text-justify text-gray-600 whitespace-break-spaces" data-testid="product-description">
                    {product.description}
                </div>
                <div className="mt-10">
                    <Button size="lg" className="w-full rounded-none" onClick={() => addProductToCart(product)} data-testid="add-to-cart-button">
                        <div className="mx-5">Add to cart</div>
                        <ShoppingCart />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Product;
