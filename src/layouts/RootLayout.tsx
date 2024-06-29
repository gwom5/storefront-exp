import React from 'react';
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../components/ui/Header";
import CategoryNav from "../components/ui/CategoryNav";


const RootLayout = () => {

    return (
        <div>
            <Header />
            <main className="container">
                <CategoryNav />
                <div className="my-10">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default RootLayout;
