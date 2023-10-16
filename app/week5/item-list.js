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

    return (
        <main>
            <button onClick={handleSort} value="name">Sort by Name</button> <br/>
            <button onClick={handleSort} value="category">Sort by Category</button>
            <h2 className="text-2xl font-bold">Items</h2>
            <div>
                {items.map((item) => (
                    <Item key={item.id} {...item} />
                ))}
            </div>
        </main>
    )
}

