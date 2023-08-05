import { Box } from "@mui/material";
import DetailProductCard from "../../common/detailProductCard/DetailProductCard";

const ItemDetail = ({ product, agregarAlCarrito, cantidadEnCarrito }) => {
  return (
    <div>
      <Box
        width="100%"
        display="flex"
        justifyContent="space-evenly"
        flexWrap="wrap"
        paddingTop={2}
        gap={2}
      >
        <DetailProductCard
          key={product.id}
          item={product}
          agregarAlCarrito={agregarAlCarrito}
          cantidadEnCarrito={cantidadEnCarrito}
          style={{ flexBasis: "calc(33.33% - 20px)" }}
        />
      </Box>
    </div>
  );
};

export default ItemDetail;
