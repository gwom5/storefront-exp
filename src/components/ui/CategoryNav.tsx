import React from "react";
import {Link, useLocation} from "react-router-dom";
import {NavigationMenu, NavigationMenuList, navigationMenuTriggerStyle} from "./NavigationMenu";
import {NavigationMenuItem, NavigationMenuLink} from "@radix-ui/react-navigation-menu";


const CategoryNav = () => {
    const location = useLocation();
    const { pathname } = location;

    const getActiveLinkClass = (path: string) => {
        return path === pathname ? 'bg-black rounded-full text-xs  text-white hover:bg-black hover:text-white':'';
    }

    return (
        <div className="container hidden md:flex justify-center flex-1 overflow-x-auto my-3">
            <NavigationMenu className="text-gray-500 relative">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link to="/">
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${getActiveLinkClass('/')}`}>
                                All
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/category/women">
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${getActiveLinkClass('/category/women')}`}>
                                Women
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/category/men">
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${getActiveLinkClass('/category/men')}`}>
                                Men
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/category/equipment">
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${getActiveLinkClass('/category/equipment')}`}>
                                Equipment
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/category/sports">
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${getActiveLinkClass('/category/sports')}`}>
                                Sports
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default CategoryNav;
