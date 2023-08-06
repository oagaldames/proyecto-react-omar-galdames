import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import Spinner from "../../common/Spinner/Spinner";
import { Box } from "@mui/material";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  const [loading, setLoading] = useState(true);

  let pageTitle = categoryName
    ? "Categoría " + categoryName.toUpperCase()
    : "Todos los Productos de la Tienda ";

  useEffect(() => {
    let consulta;
    let productsCollection = collection(db, "products");

    if (!categoryName) {
      consulta = query(productsCollection, orderBy("category", "desc"));
    } else {
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consulta)
      .then((result) => {
        let arrProducts = result.docs.map((product) => {
          return { ...product.data(), id: product.id };
        });
        setItems(arrProducts);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [categoryName]);

  if (loading) {
    return (
      <Box paddingTop={10}>
        <Spinner msgSpinner={"Cargando Datos...."} />
      </Box>
    );
  }

  return <ItemList items={items} pageTitle={pageTitle} />;
};

export default ItemListContainer;
