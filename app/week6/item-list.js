"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items";

export default function ItemList(props) {
    const [sortBy, setSortBy] = useState("name");

    const handleSort = (event) => {
        setSortBy(event.target.value);
        if (event.target.value === "name") {
            props.itemsData.sort((a, b) => a.name.localeCompare(b.name));
        } else if (event.target.value === "category") {
            props.itemsData.sort((a, b) => a.category.localeCompare(b.category));
        }
    }

    function SortButtons() {
        if (sortBy === "name") {
            return (
                <div className="space-x-4">
                    <button onClick={handleSort} value="name" className="bg-purple-900 text-white inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">Sort by Name</button> 
                    <button onClick={handleSort} value="category" className="bg-purple-400 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-gray-500/10">Sort by Category</button>
                </div>
            )
        } else if (sortBy === "category") { 
            return (
                <div className="space-x-4">
                    <button onClick={handleSort} value="name" className="bg-purple-400 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-gray-500/10">Sort by Name</button> 
                    <button onClick={handleSort} value="category" className="bg-purple-900 text-white inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">Sort by Category</button>
                </div>
            )
        }
    }

    return (
        <main className=" border-blue-900 border-4 rounded-lg p-5 bg-blue-400">
            <h2 className="text-2xl font-bold">Items</h2>
            <SortButtons />
            <div>
                {props.itemsData.map((item) => (
                    <Item key={item.id} {...item} />
                ))}
            </div>
        </main>
    )
}

