import React, {useContext} from 'react';
import {Card} from "../components/ui/Card";
import {MoveRight} from "lucide-react";
import {Link} from "react-router-dom";
import {AppContext} from "../lib/providers/AppProvider";
import { Category } from '@/lib/types/types';

interface CategoryCardProps {
    category: Category;
    isFirst: boolean;
}

const Home: React.FC = () => {
    const { categories } = useContext(AppContext);

    return (
        <div>
            <div className="grid md:grid-cols-3 auto-rows-[400px] gap-4 my-10">
                {categories.map((category, index) => (
                    <CategoryCard key={category.name} category={category} isFirst={index === 0} />
                ))}
            </div>
        </div>
    );
};


const CategoryCard: React.FC<CategoryCardProps> = ({ category, isFirst }) => (
    <Card
        key={category.name}
        className={`relative ${isFirst ? 'md:col-span-3' : ''} overflow-hidden`}
        data-testid="category-card"
    >
        <Link to={`/category/${category.name}`} data-testid={`link-${category.name}`}>
            <img
                className="max-h-[400px] w-full object-cover rounded"
                src={category.imageLink}
                alt={category.name}
                data-testid={`image-${category.name}`}
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
                <h1 className="text-xl font-bold mb-10 ml-10 text-white" data-testid={`title-${category.name}`}>
                    {category.name}
                </h1>
                <div className="text-white mb-8 ml-10">
                    <MoveRight size={40} />
                </div>
            </div>
        </Link>
    </Card>
);

export default Home;
