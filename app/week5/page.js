import ItemList from './item-list';
import HomeButton from "../home-button";

export default function Page() {
    return (
        <div className="flex flex-col items-center">
            <HomeButton />
            <h1 className="text-4xl font-bold">Shopping List</h1>
            <ItemList />
        </div>
    );
}