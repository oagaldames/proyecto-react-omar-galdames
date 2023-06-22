import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={7} color="secondary" style={{ marginRight: "30px" }}>
        <ShoppingCartIcon />
      </Badge>
    </div>
  );
};

export default CartWidget;
