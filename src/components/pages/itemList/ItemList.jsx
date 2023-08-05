import ProductCard from "../../common/productCard/ProductCard";
import { Typography, Box } from "@mui/material";

const ItemList = ({ items, pageTitle }) => {
  return (
    <>
      <Box paddingTop={10}>
        <Typography variant="h4" align="center">
          {pageTitle}
        </Typography>
      </Box>
      <Box
        width="100%"
        height="100%"
        display="flex"
        justifyContent="space-evenly"
        flexWrap="wrap"
        paddingTop={5}
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
    </>
  );
};

export default ItemList;
