import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../productosMock";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  let pageTitle = categoryName
    ? "Categoría " + categoryName.toUpperCase()
    : "Todos los Productos ";

  useEffect(() => {
    let productosFiltrados = products.filter(
      (elemento) => elemento.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : products);
      reject("salio todo mal");
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => console.log(error))
      .finally(() => console.log("hola"));
  }, [categoryName]);

  return <ItemList items={items} pageTitle={pageTitle} />;
};

export default ItemListContainer;
