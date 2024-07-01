import React from 'react';
import Cart from "./Cart";
import {Link} from "react-router-dom";

const Header = () => {

    return (
      <header className="sticky top-0 w-full border-b bg-black text-white z-10">
        <div className="h-16 container flex items-center">
            <div className="flex w-5/6 items-center justify-between font-serif">
                <div className="flex">
                    <nav className="ml-3 font-extrabold">
                        <Link to="/">Demo</Link>
                    </nav>
                </div>
            </div>
            <h1 className="flex items-center justify-end flex-1">
                <Cart  />
            </h1>
        </div>
      </header>
    );
}

export default Header;
