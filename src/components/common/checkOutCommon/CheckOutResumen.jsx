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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CheckOutResumen = ({ elemento }) => {
  return (
    <Box maxWidth={600} mx="auto">
      <TableContainer component={Paper} style={{ marginBottom: "1px" }}>
        <Table style={{ width: "100%" }}>
          <TableBody>
            <TableRow>
              <TableCell style={{ width: "15%" }}>
                <CardMedia
                  component="img"
                  image={elemento.img}
                  alt={elemento.title}
                  style={{ width: "100%", height: "auto" }}
                />
              </TableCell>
              <TableCell style={{ width: "30%" }}>
                <Typography variant="caption">{elemento.title}</Typography>
              </TableCell>
              <TableCell style={{ width: "20%" }}>
                <Typography variant="caption">
                  Precio: ${elemento.price}
                </Typography>
              </TableCell>
              <TableCell style={{ width: "20%" }}>
                <Typography variant="caption">
                  Cantidad: {elemento.quantity}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CheckOutResumen;
