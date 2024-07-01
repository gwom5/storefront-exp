import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {Category} from "../types/types";
import {useQuery} from "@tanstack/react-query";
import {categoriesQuery} from "../api/queriesLoader";
import { categoryMap} from "../utils";

export interface AppContextType {
    categories: Category[];
}

export interface AppContextProviderProps {
    children: ReactNode
}

export const AppContext = createContext<AppContextType | null>(null);
const AppProvider: React.FC<AppContextProviderProps> = ({children}) => {
    const { data: categoryStrings, error, isLoading = false } = useQuery(categoriesQuery());
    const [categories, setCategories] = useState<Category[]>([]);

    const buildCategories = () => {

        const cats: Category[] = categoryStrings.map((item) => {
            return {
                name: categoryMap[item].name,
                alias: categoryMap[item].alias,
                imageLink: categoryMap[item].imageLink,
            }
        });

        setCategories(cats);
    }

    useEffect(() => {
        if(!isLoading && !error)
            buildCategories();
    }, [isLoading, error]);

    if (isLoading) return null;

    return (
      <AppContext.Provider value={{categories}}>
          {children}
      </AppContext.Provider>
    );
}

export default AppProvider;
