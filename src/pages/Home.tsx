import React from 'react';
import {Card} from "../components/ui/Card";
import {CreditCard, MoveRight, Smartphone, Truck} from "lucide-react";
import {Link} from "react-router-dom";

const Home = () => {

    return (
        <div>
            <div className="flex justify-between gap-4 my-10 overflow-x-auto">
                <Card className="bg-sky-200 w-2/6">
                    <div className="flex justify-between py-3 px-5 w-3/4">
                        <p><Truck size={40} /></p>
                        <div className="flex flex-col">
                            <p className="font-extrabold">Free delivery and collect</p>
                            <p className="text-sm">On orders over R500</p>
                        </div>
                    </div>
                </Card>
                <Card className="bg-sky-200 w-2/6">
                    <div className="flex justify-between py-3 px-5 w-3/4">
                        <p><Smartphone size={40} /></p>
                        <div className="flex flex-col">
                            <p className="font-extrabold">Get the Demo app</p>
                            <p className="text-sm">The mall in your pocket</p>
                        </div>
                    </div>
                </Card>
                <Card className="bg-sky-200 w-2/6">
                    <div className="flex justify-between py-3 px-5 w-3/4">
                        <p><CreditCard size={40} /></p>
                        <div className="flex flex-col">
                            <p className="font-extrabold">Shop over 100 brands</p>
                            <p className="text-sm">With Demo Money</p>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="grid md:grid-cols-3 auto-rows-[400px] gap-4 my-10">
                <Card className="relative md:col-span-2 overflow-hidden">
                    <Link to="/category/women">
                        <img
                            className="max-h-[400px] w-full object-cover rounded"
                            src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
                            <h1 className="text-xl font-bold mb-10 ml-10 text-white">Women</h1>
                            <div className="text-white mb-8 ml-10">
                                    <MoveRight size={40} />
                            </div>
                        </div>
                    </Link>
                </Card>
                <Card className="relative overflow-hidden group">
                    <Link to="/category/men">
                        <img
                            className="max-h-[400px] w-full object-cover rounded"
                            src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
                            <h1 className="text-xl font-bold mb-10 ml-10 text-white">Men</h1>
                            <div className="text-white mb-8 ml-10">
                                <MoveRight size={40} />
                            </div>
                        </div>
                    </Link>
                </Card>
                <Card className="relative overflow-hidden group">
                    <Link to="/category/men">
                        <img
                            className="max-h-[400px] w-full object-cover rounded"
                            src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
                            <h1 className="text-xl font-bold mb-10 ml-10 text-white">Men</h1>
                            <div className="text-white mb-8 ml-10">
                                <MoveRight size={40} />
                            </div>
                        </div>
                    </Link>
                </Card>
                <Card className="relative overflow-hidden group">
                    <Link to="/category/men">
                        <img
                            className="max-h-[400px] w-full object-cover rounded"
                            src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
                            <h1 className="text-xl font-bold mb-10 ml-10 text-white">Men</h1>
                            <div className="text-white mb-8 ml-10">
                                <MoveRight size={40} />
                            </div>
                        </div>
                    </Link>
                </Card>
                <Card className="relative overflow-hidden group">
                    <Link to="/category/men">
                        <img
                            className="max-h-[400px] w-full object-cover rounded"
                            src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
                            <h1 className="text-xl font-bold mb-10 ml-10 text-white">Men</h1>
                            <div className="text-white mb-8 ml-10">
                                <MoveRight size={40} />
                            </div>
                        </div>
                    </Link>
                </Card>
            </div>
        </div>
    );
}

export default Home;
