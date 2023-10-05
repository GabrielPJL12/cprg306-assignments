"use client";

import { useState } from "react";
import NewItem from "./new-item.js";

const NameField = () => {
    const [name, setName] = useState("");

    return (
        <div>
            <label for="name">Name: {name}</label><br />
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
        </div>
    )
}

const QuantityField = () => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div>
            <label for="quantity">Quantity: {quantity}</label><br />
            <input type="number" id="quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
        </div>
    )
}

const CategoryField = () => {
    const [category, setCategory] = useState("Produce");

    return (
        <div>
            <label for="category">Category: {category}</label><br />
            <select id="category" value={category} onChange={e => setCategory(e.target.value)}>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Frozen">Frozen</option>
            </select>
        </div>
    )
}

const SubmitFunction = (event) => {
    event.preventDefault();

    let item = {name: NameField.name, quantity: QuantityField.quantity, category: CategoryField.category}
    console.log(item);

    NameField.name = "";
    QuantityField.quantity = 1;
    CategoryField.category = "Produce";

    return 
}

export default function form() {
    return (
        <form>
            <NameField />
            <QuantityField />
            <CategoryField />
            <button type="submit" onClick={SubmitFunction}>Submit</button>
        </form>
    )
}

<NewItem />