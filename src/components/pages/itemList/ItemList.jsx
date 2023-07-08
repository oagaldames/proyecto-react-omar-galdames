import ProductCard from "../../common/productCard/ProductCard";
import { Typography, Box } from "@mui/material";

const ItemList = ({ items, pageTitle }) => {
  console.log("titulo de pagina", pageTitle);
  return (
    <section>
      <Typography variant="h3" align="center">
        {pageTitle}
      </Typography>
      <Box
        width="100%"
        display="flex"
        justifyContent="space-evenly"
        flexWrap="wrap"
        paddingTop={2}
        gap={2}
      >
        {items.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            style={{ flexBasis: "calc(33.33% - 20px)" }}
          />
        ))}
      </Box>
    </section>
  );
};

export default ItemList;
