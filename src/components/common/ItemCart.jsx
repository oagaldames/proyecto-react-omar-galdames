import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Box,
  CardMedia,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ItemCart = ({ elemento, eliminarItem }) => {
  return (
    <Box maxWidth={800} mx="auto" mt={2}>
      <TableContainer component={Paper} style={{ marginBottom: "10px" }}>
        <Table style={{ width: "100%" }}>
          <TableBody>
            <TableRow>
              <TableCell style={{ width: "20%" }}>
                <CardMedia
                  component="img"
                  image={elemento.img}
                  alt={elemento.title}
                  style={{ width: "100%", height: "auto" }}
                />
              </TableCell>
              <TableCell style={{ width: "20%" }}>
                <Typography variant="h5">{elemento.title}</Typography>
              </TableCell>
              <TableCell style={{ width: "20%" }}>
                <Typography>Precio: ${elemento.price}</Typography>
              </TableCell>
              <TableCell style={{ width: "20%" }}>
                <Typography>Cantidad: {elemento.quantity}</Typography>
              </TableCell>
              <TableCell style={{ width: "20%", textAlign: "center" }}>
                <IconButton
                  color="error"
                  onClick={() => eliminarItem(elemento.id, elemento.title)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ItemCart;
