import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { Badge } from '@/components/ui/badge';
import Header from "../components/ui/Header";

const RootLayout = () => {

    return (
        <div>
            <Header />
            <main style={{ border: 'solid 2px black'}}>
                <div className="container mx-auto" style={{ border: 'solid 2px black'}}>
                        <div className="flex justify-center">
                            <NavLink className="mr-12" to="/">
                            <Badge>
                                All
                            </Badge>

                            </NavLink>
                            <NavLink className="mr-12" to="/category/women">
                                Women
                            </NavLink>
                            <NavLink className="mr-12" to="category/men">
                                Men
                            </NavLink>
                            <NavLink className="mr-12" to="category/sports">
                                Sports
                            </NavLink>
                        </div>
                        <div>
                            <Outlet />
                        </div>
                </div>
            </main>
        </div>
    )
}

export default RootLayout;
