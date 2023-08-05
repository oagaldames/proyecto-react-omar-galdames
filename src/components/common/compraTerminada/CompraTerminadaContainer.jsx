import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";

const CompraTerminadaContainer = ({ orderId }) => {
  return (
    <Box align="center" justify="center" width="100%" pad="large">
      <Box direction="column" align="center" justify="center">
        <Typography variant="h5" component="div" align="center">
          Gracias por comprar
        </Typography>
        <Typography variant="h5" component="div" align="center">
          Su compra fue registrada con exito
        </Typography>
        <Typography variant="h5" component="div" align="center">
          Su numero de orden es: <b>{orderId}</b>
        </Typography>
      </Box>
      <Link to="/">
        <Button size="small" variant="contained">
          Seguir comprando
        </Button>
      </Link>
    </Box>
  );
};

export default CompraTerminadaContainer;
