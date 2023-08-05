import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ItemCart from "../../common/ItemCart";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice, getTotalQuantity } =
    useContext(CartContext);

  let pageTitle =
    cart.length > 0
      ? "Productos en el Carrito de Compras "
      : "¡Empieza un carrito de compras! ";
  let eliminarItem = (elementoId, elementoTitle) => {
    Swal.fire({
      title: `Seguro quieres eliminar ${elementoTitle}?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(elementoId);
        deleteById(elementoId);
        Swal.fire(`${elementoTitle} fue eliminado!`, "", "success");
      } else if (result.isDenied) {
        Swal.fire("El Item no fue eliminado", "", "info");
      }
    });
  };

  let limpiar = () => {
    Swal.fire({
      title: "seguro quieres eliminar todo ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito eliminado con exito", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Carrito sin modificar", "", "info");
      }
    });
  };

  let total = getTotalPrice();

  let totalItems = getTotalQuantity();
  return (
    <div>
      <Box marginBottom="100px">
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          paddingTop={10}
          gap={2}
        >
          <Typography variant="h4">{pageTitle}</Typography>
        </Box>

        {cart.map((elemento) => {
          return (
            <ItemCart
              key={elemento.id}
              elemento={elemento}
              eliminarItem={eliminarItem}
            />
          );
        })}
        {cart.length > 0 && (
          <>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              paddingTop={5}
              flexDirection="column"
            >
              <Typography variant="h6" sx={{ mx: 1 }}>
                Cantidad Items en el carrito: {totalItems}
              </Typography>
              <Typography variant="h6" sx={{ mx: 1 }}>
                El total del carrito es: $ {total}
              </Typography>
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
              paddingTop={5}
            >
              <Button
                size="medium"
                variant="contained"
                onClick={limpiar}
                sx={{ mx: 1 }}
              >
                Limpiar carrito
              </Button>
              <Link to="/checkout" style={{ textDecoration: "none" }}>
                <Button
                  size="medium"
                  variant="contained"
                  sx={{ mx: 1 }}
                  color="warning"
                >
                  Terminar compra
                </Button>
              </Link>
            </Box>
          </>
        )}
        {cart.length == 0 && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingTop={10}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button size="large" variant="contained">
                Descubrir Productos
              </Button>
            </Link>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default CartContainer;
