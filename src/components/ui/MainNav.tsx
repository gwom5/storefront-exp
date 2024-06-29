import MenuSheet from "./MenuSheet";
import SearchBar from "./SearchBar";
import React from "react";
import {Link} from "react-router-dom";

const MainNav = () => {

    return (
        <div className="hidden md:flex w-5/6 items-center justify-between font-serif">
            <div className="flex">
                <MenuSheet />
                <nav className="ml-3 font-extrabold">
                    <Link to="/">Demo</Link>
                </nav>
            </div>
            <div className="w-2/4">
                <SearchBar />
            </div>
        </div>
    );
}

export default MainNav;
