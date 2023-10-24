"use client";

import { useState } from "react";

import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from "./items";
import HomeButton from "../home-button";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    function handleAddItem(item) {
        setItems((prevItems) => [...prevItems, item]);
    }


    return (
        <div className="flex flex-col items-center">
            <HomeButton />
            <h1 className="text-4xl font-bold">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList itemsData={items} />
        </div>
    );
}