import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Box, Button, Typography } from "@mui/material";
import Spinner from "../../common/Spinner/Spinner";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  let { id } = useParams();
  const { addToCart, getQuantityById } = useContext(CartContext);

  let cantidadEnCarrito = getQuantityById(id);
  useEffect(() => {
    let refColeccion = collection(db, "products");
    let refDocumentos = doc(refColeccion, id);

    getDoc(refDocumentos)
      .then((resp) => {
        if (resp.exists()) {
          setProduct({ ...resp.data(), id: resp.id });
        } else {
          setProduct({});
        }
      })
      .catch((error) => {
        console.log("Error al obtener el documento: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    addToCart(data);
    toast.success("Producto agregado", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  if (loading) {
    return (
      <Box paddingTop={10}>
        <Spinner msgSpinner={"Cargando Datos...."} />
      </Box>
    );
  }
  return product.id !== undefined ? (
    <>
      <ItemDetail
        product={product}
        agregarAlCarrito={agregarAlCarrito}
        cantidadEnCarrito={cantidadEnCarrito}
      />
      <ToastContainer />
    </>
  ) : (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      paddingTop={10}
      flexDirection="column"
    >
      <Typography variant="h3" textAlign="center" marginBottom={5}>
        El producto no Existe !
      </Typography>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button size="large" variant="contained">
          Ir a pagina principal
        </Button>
      </Link>
    </Box>
  );
};

export default ItemDetailContainer;
