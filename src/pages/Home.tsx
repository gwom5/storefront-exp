import React, {useContext} from 'react';
import {Card} from "../components/ui/Card";
import {MoveRight} from "lucide-react";
import {Link} from "react-router-dom";
import {AppContext} from "../App";
import { Category } from '@/lib/types/types';

const Home = () => {
    const { categories } = useContext(AppContext);

    return (
        <div>
            <div className="grid md:grid-cols-3 auto-rows-[400px] gap-4 my-10">
                {categories.map((category: Category, index) => (
                    <Card className={`relative ${index === 0 ? 'md:col-span-3' : ''} overflow-hidden`}>
                        <Link to={`/category/${category.name}`}>
                            <img
                                className="max-h-[400px] w-full object-cover rounded"
                                src={`${category.imageLink}`}
                                alt=""
                            />
                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
                                <h1 className="text-xl font-bold mb-10 ml-10 text-white">{category.name}</h1>
                                <div className="text-white mb-8 ml-10">
                                    <MoveRight size={40} />
                                </div>
                            </div>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Home;
