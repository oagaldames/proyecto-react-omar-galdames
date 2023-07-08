import { Button, Typography } from "@mui/material";

const Counter = ({ counter, setCounter, agregarAlCarrito, stock }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          padding: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          disabled={counter <= 1}
          variant="contained"
          onClick={() => setCounter(counter - 1)}
        >
          <Typography variant="h6" component="div" align="center">
            -
          </Typography>
        </Button>
        <Typography
          variant="h6"
          component="div"
          align="center"
          sx={{ margin: "0 15px" }}
        >
          {counter}
        </Typography>

        <Button
          disabled={counter >= stock}
          variant="contained"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </Button>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={() => agregarAlCarrito(counter)}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default Counter;
