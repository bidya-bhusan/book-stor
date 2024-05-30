import React, { useEffect, useState } from "react";
import { BooksCon } from "../interface/interface";
import { fetchFromApi } from "../utils/restapi";
import { Books } from "./product";

export function AllBooks() {
    const [books, setBooks] = useState<BooksCon[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(Infinity);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    useEffect(() => {
        async function getBooks() {
            try {
                const books = await fetchFromApi<BooksCon[]>("books");
                // Getting Unique Category
                const categoriesData = books.flatMap(book => book.genre);
                const uniqueCategories = [...new Set(categoriesData)];

                setBooks(books);
                setCategories(uniqueCategories);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        }

        getBooks();
    }, []);

    const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinPrice(Number(event.target.value));
    };

    const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(Number(event.target.value));
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    };

    const filteredBooks = books.filter(book => {
        const isWithinCategory = selectedCategory === "All" || book.genre.includes(selectedCategory);
        const isWithinPriceRange = (book.price >= minPrice) && (book.price <= maxPrice);
        return isWithinCategory && isWithinPriceRange;
    });


    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div className="bg-gray-800 text-gray-800 py-4 shadow-md rounded-lg" style={{ width: "50%", marginTop: "10px", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="All">All</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
                <input
                    type="number"
                    placeholder="Min Price : 500"
                    value={minPrice === 0 ? "" : minPrice}
                    onChange={handleMinPriceChange}
                    style={{ marginRight: "10px" }}
                />
                <input
                    type="number"
                    placeholder="Max Price : 1000"
                    value={maxPrice === Infinity ? "" : maxPrice}
                    onChange={handleMaxPriceChange}
                />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", marginTop: "20px" }}>
                {filteredBooks.map((book) => (
                    <Books key={book.id} book={book} />
                    
                ))}
            </div>
        </div>
    );
}
