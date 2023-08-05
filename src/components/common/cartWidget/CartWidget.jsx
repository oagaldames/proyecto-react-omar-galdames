import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();
  return (
    <Link to="/cart" style={{ color: "black" }}>
      <Badge
        badgeContent={total}
        color="secondary"
        style={{ marginRight: "30px" }}
      >
        <ShoppingCartIcon />
      </Badge>
    </Link>
  );
};

export default CartWidget;
