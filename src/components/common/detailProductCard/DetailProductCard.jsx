import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CounterContainer from "../counter/CounterContainer";

const DetailProductCard = ({ item, agregarAlCarrito, cantidadEnCarrito }) => {
  return (
    <Card sx={{ width: "calc(60%)", marginTop: "80px" }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <CardMedia
            sx={{
              height: 300,
              width: 550,
              marginTop: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            image={item.img}
            title={item.title}
          />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              align="center"
            >
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              {item.description}
            </Typography>
            <Typography variant="h5" component="div" align="center">
              Precio : $ {item.price}
            </Typography>
            <Typography variant="h6" component="div" align="center">
              Stock Disponible : {item.stock}
            </Typography>

            <CounterContainer
              cantidadEnCarrito={cantidadEnCarrito}
              stock={item.stock}
              agregarAlCarrito={agregarAlCarrito}
            />
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};
export default DetailProductCard;
