"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        let item = {name: name, quantity: quantity, category: category}
        console.log(item);

        alert(`You are submitting\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`)
        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input id="name" type="text" value={name} onChange={(event) => setName(event.target.value)} />
                <br /><br />
                <label htmlFor="quantity">Quantity: </label>
                <input id="quantity" type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
                <br /><br />
                <label htmlFor="category">Category: </label>
                <select id="category" value={category} onChange={(event) => setCategory(event.target.value)}>
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen">Frozen Foods</option>
                    <option value="Canned">Canned Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Other">Other</option>
                </select>
                <br /><br />
                <button type="submit">Add Item</button>
            </form>
        </main>
    )
}