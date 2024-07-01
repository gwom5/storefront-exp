import React from "react";
import {Link} from "react-router-dom";
import {Card} from "./Card";

interface ProductCardProps {
    id: number;
    image: string;
    title: string;
    price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, image, title, price }) => {

    return (
        <Link to={`/product/${id}`}>
            <div className='flex flex-col h-full'>
                <Card className="overflow-hidden h-3/4 mb-2 shadow-zinc-300">
                    <img
                        className="max-h-[400px] w-full object-cover rounded"
                        src={image}
                        alt={title}
                    />
                </Card>
                <div>
                    <h3 className=" font-semibold text-xs">{title}</h3>
                    <h3 className="text-sm">R{price}</h3>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;
