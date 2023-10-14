import ItemList from "./item-list";
import HomeButton from "../home-button";

export default function Page() {
  return (
    <main>
      <HomeButton />
      <h1>Shopping List</h1>
      <ItemList />
    </main>
  );
}