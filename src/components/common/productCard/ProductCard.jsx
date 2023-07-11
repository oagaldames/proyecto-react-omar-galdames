import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ width: "calc(33.33% - 20px)" }}>
      <CardMedia
        sx={{ height: 200, width: "calc(90%)" }}
        image={item.img}
        title={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/itemDetail/${item.id}`}>
          <Button size="small" variant="contained">
            Ver detalle del producto
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
