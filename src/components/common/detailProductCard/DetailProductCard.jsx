import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CounterContainer from "../counter/CounterContainer";

const DetailProductCard = ({ item, agregarAlCarrito }) => {
  return (
    <Card sx={{ width: "calc(60%)" }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardMedia
            sx={{
              height: 162,
              width: 300,
              marginTop: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            image={item.img}
            title="green iguana"
          />
        </Grid>
        <Grid
          item
          xs={8}
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
