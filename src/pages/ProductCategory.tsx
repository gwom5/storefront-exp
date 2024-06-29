import React from 'react';
import { useParams, useLoaderData, Link, } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { productsByCategoryLoader, productsByCategoryQuery } from '@/lib/api/queriesLoader';
import { Card } from '@/components/ui/Card';

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
                    <Link key={product.id} to={`/product/${product.id}`}>
                        <div className='flex flex-col h-full'>
                            <Card key={product.id} className="overflow-hidden h-3/4 mb-2">
                                <img
                                    className="max-h-[400px] w-full object-cover rounded"
                                    src={product.image}
                                    alt={product.title}
                                />
                            </Card>
                            <div>
                                <h3 className=" font-semibold text-xs">{product.title}</h3>
                                <h3 className="text-sm">R{product.price}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ProductCategory;
