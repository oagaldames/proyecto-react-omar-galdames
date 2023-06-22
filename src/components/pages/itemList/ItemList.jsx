import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ItemList = ({ mensaje }) => {
  return (
    <Box display="flex" justifyContent="center" paddingTop={10}>
      <Typography variant="h2" component="div">
        {mensaje}
      </Typography>
    </Box>
  );
};

export default ItemList;
