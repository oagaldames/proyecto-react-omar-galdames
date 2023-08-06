import {
  Button,
  TextField,
  Box,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { CartContext } from "../../../context/CartContext";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import CompraTerminadaContainer from "../../common/checkOutCommon/CheckOutForm";
import Spinner from "../../common/Spinner/Spinner";
import CheckOutResumen from "../../common/checkOutCommon/CheckOutResumen";

const CheckoutContainer = () => {
  const { cart, getTotalPrice, getTotalQuantity, clearCart } =
    useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);

  let total = getTotalPrice();
  let totalItems = getTotalQuantity();
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      phone: "",
      email: "",
      chkEmail: "",
    },

    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total,
        date: serverTimestamp(),
      };
      setLoading(true);
      let ordersCollections = collection(db, "orders");

      addDoc(ordersCollections, order)
        .then((res) => {
          if (res.id) {
            setOrderId(res.id);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });

      cart.forEach((elemento) => {
        updateDoc(doc(db, "products", elemento.id), {
          stock: elemento.stock - elemento.quantity,
        });
      });
      clearCart();
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es obligatorio")
        .min(1, "Debe tener al menos 5 caracteres")
        .max(15),
      lastName: Yup.string()
        .required("Este campo es obligatorio")
        .min(1, "Debe tener al menos 5 caracteres")
        .max(15),
      phone: Yup.string()
        .required("Este campo es obligatorio")
        .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, {
          message: "Número de telefono no válido ",
        }),
      email: Yup.string()
        .email("No corresponde a un email valido")
        .required("Este campo es obligatorio"),
      chkEmail: Yup.string()
        .email("No corresponde a un email valido")
        .required("Este campo es obligatorio")
        .oneOf([Yup.ref("email")], "Los emails no coinciden"),
    }),
    validateOnChange: false,
  });
  if (loading) {
    return (
      <Box paddingTop={10}>
        <Spinner msgSpinner={"Generando Orden...."} />
      </Box>
    );
  }
  return (
    <>
      {!orderId ? (
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box paddingTop={10} display="flex" justifyContent="center">
                <Box
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                  border={1}
                  borderColor={"gray"}
                  borderRadius="20px"
                  padding={2}
                  maxWidth="90vh"
                >
                  <Typography variant="h6" textAlign="center">
                    Resumen de su Carrito
                  </Typography>
                  <Typography variant="caption" textAlign="center">
                    Cantidad Items: {totalItems}
                  </Typography>
                  <Typography variant="caption" textAlign="center">
                    Total: $ {total}
                  </Typography>
                  {cart.map((elemento) => {
                    return <CheckOutResumen elemento={elemento} />;
                  })}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                display="flex"
                justifyContent="center"
                paddingTop={10}
                minHeight="110vh"
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  height="100%"
                  maxWidth="90vh"
                  padding={2}
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    border={1}
                    borderColor={"gray"}
                    borderRadius="20px"
                    padding={2}
                  >
                    <Typography variant="h5" textAlign="center">
                      CheckOut
                    </Typography>
                    <Typography variant="caption" textAlign="center">
                      Ingrese sus datos para poder generar la orden de compra
                    </Typography>
                    <form onSubmit={handleSubmit}>
                      <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Grid item xs={12} textAlign="center">
                          <TextField
                            label="Nombre"
                            variant="outlined"
                            name="name"
                            onChange={handleChange}
                            error={errors.name ? true : false}
                            helperText={errors.name}
                          />
                        </Grid>
                        <Grid item xs={12} textAlign="center">
                          <TextField
                            label="Apellido"
                            variant="outlined"
                            name="lastName"
                            onChange={handleChange}
                            error={errors.lastName ? true : false}
                            helperText={errors.lastName}
                          />
                        </Grid>
                        <Grid item xs={12} textAlign="center">
                          <TextField
                            label="Telefono"
                            variant="outlined"
                            name="phone"
                            onChange={handleChange}
                            error={errors.phone ? true : false}
                            helperText={errors.phone}
                          />
                        </Grid>
                        <Grid item xs={12} textAlign="center">
                          <TextField
                            type="text"
                            label="Email"
                            variant="outlined"
                            name="email"
                            onChange={handleChange}
                            error={errors.email ? true : false}
                            helperText={errors.email}
                          />
                        </Grid>
                        <Grid item xs={12} textAlign="center">
                          <TextField
                            type="text"
                            label="Repita el Email"
                            variant="outlined"
                            name="chkEmail"
                            onChange={handleChange}
                            error={errors.chkEmail ? true : false}
                            helperText={errors.chkEmail}
                          />
                        </Grid>
                        <Grid item xs={12} textAlign="center">
                          <Button type="submit" variant="contained">
                            Generar Orden
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      ) : (
        <>
          <Box paddingTop={10} display="flex" justifyContent="center">
            <CompraTerminadaContainer orderId={orderId} />
          </Box>
        </>
      )}
    </>
  );
};

export default CheckoutContainer;
