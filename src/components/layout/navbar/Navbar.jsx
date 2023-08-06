import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Link, Outlet } from "react-router-dom";
import { Tooltip } from "@mui/material";

const Navbar = () => {
  let userRol = "admi";
  return (
    <div>
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={999}
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

        <Typography variant="h5" sx={{ marginLeft: "30px" }}>
          Tienda On-Line
        </Typography>
        <Box
          component="ul"
          sx={{ display: "flex", listStyle: "none", padding: 0 }}
        >
          <li sx={{ marginRight: "30px" }}>
            <Tooltip title="Ver Categoría Sensores">
              <Button component={Link} to="/category/sensores" color="inherit">
                <Typography variant="button">Sensores</Typography>
              </Button>
            </Tooltip>
          </li>
          <li sx={{ marginRight: "30px" }}>
            <Tooltip title="Ver Categoría PLCs">
              <Button component={Link} to="/category/plc" color="inherit">
                <Typography variant="button">PLC's</Typography>
              </Button>
            </Tooltip>
          </li>

          <li sx={{ marginRight: "30px" }}>
            <Tooltip title="Ver Categoría HMI">
              <Button component={Link} to="/category/hmi" color="inherit">
                <Typography variant="button">Hmi</Typography>
              </Button>
            </Tooltip>
          </li>
          <li sx={{ marginRight: "30px" }}>
            {userRol === "admin" && (
              <Button component={Link} to="/dashboard" color="inherit">
                <Typography variant="button">Admin</Typography>
              </Button>
            )}
          </li>
        </Box>
        <CartWidget />
      </Box>
    </div>
  );
};

export default Navbar;
