import React, { useState } from 'react';
import {Input} from "./Input";
import {Search} from "lucide-react";
import {Card, CardContent} from "./Card";


const SearchBar: React.FC = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<string[]>([]);
    const [showResults, setShowResults] = useState(false);

    const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);

        // Simulate a search function
        const searchResults = await fakeSearch(event.target.value);
        setResults(searchResults);
    };

    const fakeSearch = (query: string): Promise<string[]> => {
        // Simulate search results
        const allResults = [
            'apple',
            'banana',
            'grape',
            'orange',
            'pear',
            'pineapple',
            'watermelon',
        ];
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(allResults.filter((item) => item.includes(query)));
            }, 300);
        });
    };

    return (
        <div className="relative max-w-md mx-auto">
            <div className="relative flex items-center">
                <Search className="absolute left-3 text-gray-500" />
                <Input
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    onFocus={() => setShowResults(true)}
                    onBlur={() => setShowResults(false)}
                    className="w-full text-gray-500 pl-10 border rounded-lg focus:outline-none"
                    placeholder="Search products"
                />
            </div>
            {showResults && results.length > 0 && (
                <Card className="absolute w-full mt-1 p-4 text-gray-500 bg-white border border-gray-300 rounded-lg shadow-lg">
                    <CardContent>
                        {results.map((result, index) => (
                            <div key={index} className="p-2 border-b border-gray-200 last:border-none">
                                {result}
                            </div>
                        ))}
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default SearchBar;
