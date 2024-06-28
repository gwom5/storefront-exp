import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";
import CategoryNav from "../components/ui/CategoryNav";

const RootLayout = () => {

    return (
        <div>
            <Header />
            <main className="container">
                <CategoryNav />
                <div className="my-10" style={{ border: 'solid 2px black' }}>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default RootLayout;
