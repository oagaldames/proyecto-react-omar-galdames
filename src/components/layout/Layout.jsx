import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box direction="column" align="start" justify="center" width="100%">
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
