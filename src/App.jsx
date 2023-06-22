import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";

function App() {
  const mensaje = "BIENVENIDO A NUESTRA TIENDA ONLINE";

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={mensaje} />
    </div>
  );
}

export default App;
