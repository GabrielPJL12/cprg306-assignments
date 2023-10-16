"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    const handleSort = (event) => {
        setSortBy(event.target.value);
        if (event.target.value === "name") {
            items.sort((a, b) => a.name.localeCompare(b.name));
        } else if (event.target.value === "category") {
            items.sort((a, b) => a.category.localeCompare(b.category));
        }
    }

    function SortButtons() {
        if (sortBy === "name") {
            return (
                <div className="flex justify-center space-x-4">
                    <button onClick={handleSort} value="name" class="bg-slate-400 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-gray-500/10">Sort by Name</button> 
                    <button onClick={handleSort} value="category" class="bg-slate-200 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-gray-500/10">Sort by Category</button>
                </div>
            )
        } else if (sortBy === "category") { 
            return (
                <div className="flex justify-center space-x-4">
                    <button onClick={handleSort} value="name" class="bg-slate-200 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-gray-500/10">Sort by Name</button> 
                    <button onClick={handleSort} value="category" class="bg-slate-400 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-gray-500/10">Sort by Category</button>
                </div>
            )
        }
    }

    return (
        <main>
            <h2 className="text-2xl font-bold">Items</h2>
            <SortButtons />
            <div>
                {items.map((item) => (
                    <Item key={item.id} {...item} />
                ))}
            </div>
        </main>
    )
}

