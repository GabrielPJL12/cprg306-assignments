"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items";

export default function ItemList() {
    return (
        <main>
            <h2 className="text-2xl font-bold">Items</h2>
            <div>
                {items.map((item) => (
                    <Item key={item.id} {...item} />
                ))}
            </div>
        </main>
    )
}