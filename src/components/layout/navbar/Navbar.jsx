import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bgcolor="primary.dark"
        color="white"
        px={2}
        height={60}
        width="100%"
      >
        <Link to="/">
          <Box
            display="flex"
            alignItems="center"
            flexGrow={1}
            sx={{ maxWidth: 200 }}
          >
            <img
              src="https://res.cloudinary.com/dlpr5h9qz/image/upload/v1687385601/Logo_jf0ero.png"
              alt="Logo"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Link>

        <Typography variant="h4" sx={{ marginLeft: "30px" }}>
          TIENDA ON LINE
        </Typography>
        <Box
          component="ul"
          sx={{ display: "flex", listStyle: "none", padding: 0 }}
        >
          <li sx={{ marginRight: "30px" }}>
            <Button
              component={Link}
              to="/category/sensores"
              // variant="contained"
              color="inherit"
            >
              <Typography variant="button">SENSORES</Typography>
            </Button>
          </li>

          <li sx={{ marginRight: "30px" }}>
            <Button
              component={Link}
              to="/category/plc"
              // variant="contained"
              color="inherit"
            >
              <Typography variant="button">PLC's</Typography>
            </Button>
          </li>
          <li sx={{ marginRight: "30px" }}>
            <Button component={Link} to="/category/hmi" color="inherit">
              <Typography variant="button">HMI</Typography>
            </Button>
          </li>
        </Box>

        <CartWidget />
      </Box>
      <Outlet />
    </div>
  );
};

export default Navbar;
