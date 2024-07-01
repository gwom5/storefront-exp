import React from 'react';
import { useParams, useLoaderData, Link, } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { productsByCategoryLoader, productsByCategoryQuery } from '@/lib/api/queriesLoader';
import ProductCard from "../components/ui/ProductCard";

const ProductCategory = () => {
    const { categoryName } = useParams();
    const initialData = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof productsByCategoryLoader>>
  >
  const { data: products } = useQuery({
    ...productsByCategoryQuery(categoryName), initialData
  })

    return (
        <div className="font-serif">
            <h1 className="font-extrabold font-serif">Browse <span className="text-gray-400">{categoryName}</span></h1>
            <div className="grid md:grid-cols-5 auto-rows-[400px] gap-x-4 gap-y-4 my-10 mt-10">
                {products.map((product) => (
                    <ProductCard key={product.id} id={product.id} image={product.image} title={product.title} price={product.price} />
                ))}
            </div>
        </div>
    )
}

export default ProductCategory;
