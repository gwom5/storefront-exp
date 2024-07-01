import React, {useContext} from "react";
import {Link, useLocation} from "react-router-dom";
import {NavigationMenuItem, NavigationMenuLink} from "@radix-ui/react-navigation-menu";
import {NavigationMenu, NavigationMenuList} from "./NavigationMenu";
import {AppContext} from "../../lib/providers/AppProvider";
import {Category} from "../../lib/types/types";

const CategoryNav = () => {
    const location = useLocation();
    const { pathname } = location;
    const { categories } = useContext(AppContext);

    const getActiveLinkClass = (path: string) => {
        return path === pathname ? 'bg-black rounded-full text-white hover:bg-black hover:text-white':'';
    }
    const linkClass = 'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-bold transition-colors hover:bg-accent hover:text-accent-foreground'

    return (
        <div className="container w-full md:flex justify-center flex-1 overflow-x-auto my-3 ">
            <NavigationMenu className="text-gray-500 relative flex justify-between">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={`${getActiveLinkClass('/')} ${linkClass}`} asChild>
                            <Link to="/">
                                Home
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    {categories.map((item: Category, index) => (
                        <NavigationMenuItem key={`${item}_${index}`}>
                            <NavigationMenuLink  className={`${getActiveLinkClass(`/category/${item.name}`)} ${linkClass}`} asChild>
                                <Link to={`/category/${item.name}`}>
                                    {item.name}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default CategoryNav;
