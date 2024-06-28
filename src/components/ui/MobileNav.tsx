import React from "react";
import {Link} from "react-router-dom";
import MenuSheet from "./MenuSheet";
import SearchBar from "./SearchBar";

const MobileNav = () => {

    return (
        <div className="md:hidden w-5/6 flex items-center justify-between">
            <div className="flex">
                <MenuSheet />
                <nav className="mx-3 font-extrabold">
                    <Link to="/">Demo</Link>
                </nav>
            </div>
            <div className="w-3/4">
                <SearchBar />
            </div>
        </div>
    );
}

export default MobileNav;
