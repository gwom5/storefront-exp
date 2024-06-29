import React, {useContext} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {NavigationMenuItem, NavigationMenuLink} from "@radix-ui/react-navigation-menu";
import {NavigationMenu, NavigationMenuList, navigationMenuTriggerStyle} from "./NavigationMenu";
import {AppContext} from "../../App";
import {Category} from "../../lib/types/types";

const CategoryNav = () => {
    const location = useLocation();
    const { pathname } = location;
    const navigate = useNavigate();
    const { categories } = useContext(AppContext);

    const getActiveLinkClass = (path: string) => {
        return path === pathname ? 'bg-black rounded-full text-xs  text-white hover:bg-black hover:text-white':'';
    }

    return (
        <div className="container hidden md:flex justify-center flex-1 overflow-x-auto my-3 ">
            <NavigationMenu className="text-gray-500 relative">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link to="/">
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${getActiveLinkClass('/')}`}>
                                All
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    {categories.map((item: Category, index) => (
                        <NavigationMenuItem key={`${item}_${index}`}>
                            <Link to={`/category/${item.name}`}>
                                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${getActiveLinkClass(`/category/${item.name}`)}`}>
                                    {item.name}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default CategoryNav;
