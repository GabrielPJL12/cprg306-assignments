import NewItem from "./new-item.js";
import HomeButton from "../home-button";

export default function Page() {  
    return (
        <main>
            <HomeButton />
            <h1>New Item</h1>
            <NewItem />
        </main>
    );
}