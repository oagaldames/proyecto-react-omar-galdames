import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
//import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

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
        console.error("Error al obtener el documento: ", error);
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
      <div>
        <h1>CARGANDO PRODUCTO...</h1>
      </div>
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
    <div>
      <h1>PRODUCTO NO EXISTE</h1>
    </div>
  );
};

export default ItemDetailContainer;
