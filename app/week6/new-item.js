"use client";

import { useState } from "react";

export default function NewItem(props) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        let item = {name: name, quantity: quantity, category: category}
        console.log(item);

        if (name !== "") {
            alert(`You are submitting\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`)
            props.onAddItem(item);
        }
        else {
            alert("Please enter a name for the item.")
        }
        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="border-4 rounded-lg bg-green-300 border-green-800 inline-block p-5">
                <h2 className="text-2xl font-bold">Add Item</h2>
                <div >
                    <div className="border-4 rounded-lg border-green-800 bg-green-400 p-2 justify-center">
                        <label htmlFor="name">Name: </label>
                        <input id="name" type="text" value={name} onChange={(event) => setName(event.target.value)} />
                    </div>
                </div>
                <br />
                <div>
                    <div className="border-4 rounded-lg border-green-800 bg-green-400 justify-center p-2">
                        <label htmlFor="quantity">Quantity: </label>
                        <input id="quantity" type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
                    </div>
                </div>
                <br />
                <div>
                    <div className="border-4 rounded-lg border-green-800 bg-green-400 justify-center p-2">
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
                    </div>
                </div>
                <br />
                <div>
                    <div className="border-4 rounded-lg border-green-800 flex bg-green-400 justify-center p-2">
                        <button type="submit">Add Item</button>
                    </div>
                </div>
            </form>
        </div>
    )
}