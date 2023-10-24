export default function Item({ name, quantity, category }) {
    return (
        <div className="border-4 rounded border-blue-900 bg-sky-600 w-full max-w-xs my-4 p-2">
            <p className="">Name: {name}</p>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </div>
    );
}