import { Box, Button } from "@mui/material";
import { products } from "../../../productosMock";
import { db } from "../../../firebaseConfig";
import { addDoc, updateDoc, collection, getDocs } from "@firebase/firestore";

const Dashboard = () => {
  const rellenar = () => {
    let refCollection = collection(db, "products");
    products.forEach((prod) => {
      addDoc(refCollection, prod);
    });
  };

  const updateProductsStock = () => {
    const productsCollection = collection(db, "products");
    const consulta = getDocs(productsCollection);

    consulta.then((consulta) => {
      consulta.forEach((doc) => {
        const productRef = doc.ref;
        updateDoc(productRef, { stock: 1000 })
          .then(() => {
            console.log(`Stock actualizado para el producto con ID: ${doc.id}`);
          })
          .catch((error) => {
            console.error(
              `Error al actualizar el stock para el producto con ID: ${doc.id}`,
              error
            );
          });
      });
    });
  };

  return (
    <Box padding={10}>
      <h1>Ruta para el administrador</h1>
      <Button variant="contained" onClick={updateProductsStock}>
        Cargar stocks Productos
      </Button>
    </Box>
  );
};

export default Dashboard;
