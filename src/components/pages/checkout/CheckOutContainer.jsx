import { Button, TextField } from "@mui/material";
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
import CompraTerminadaContainer from "../../common/compraTerminada/CompraTerminadaContainer";

const CheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  let total = getTotalPrice();

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

      let ordersCollections = collection(db, "orders");

      addDoc(ordersCollections, order)
        .then((res) => {
          if (res.id) {
            setOrderId(res.id);
          }
        })
        .catch((error) => {
          console.log(error);
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

  return (
    <div style={{ padding: "40px" }}>
      {!orderId ? (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            variant="outlined"
            name="name"
            onChange={handleChange}
            error={errors.name ? true : false}
            helperText={errors.name}
          />
          <TextField
            label="Apellido"
            variant="outlined"
            name="lastName"
            onChange={handleChange}
            error={errors.lastName ? true : false}
            helperText={errors.lastName}
          />
          <TextField
            label="Telefono"
            variant="outlined"
            name="phone"
            onChange={handleChange}
            error={errors.phone ? true : false}
            helperText={errors.phone}
          />
          <TextField
            type="text"
            label="Email"
            variant="outlined"
            name="email"
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
          />
          <TextField
            type="text"
            label="Email"
            variant="outlined"
            name="chkEmail"
            onChange={handleChange}
            error={errors.chkEmail ? true : false}
            helperText={errors.chkEmail}
          />

          <Button type="submit" variant="contained">
            Generar Orden
          </Button>
        </form>
      ) : (
        <>
          <CompraTerminadaContainer orderId={orderId} />
        </>
      )}
    </div>
  );
};

export default CheckoutContainer;
