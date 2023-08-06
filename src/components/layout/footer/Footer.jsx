import { Box, Typography, IconButton, Tooltip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const handleClic = (source) => {
  if (source === "linkedin") {
    window.open(
      "https://www.linkedin.com/in/omar-galdames-2a4607229/",
      "_blank"
    );
  }
};
const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bgcolor="primary.dark"
      color="white"
      px={2}
      height={50}
      width="100%"
      marginTop={10}
      // position="fixed"
      bottom={0}
      left={0}
      right={0}
    >
      <Typography variant="caption">
        Proyecto E-commerce React JS - Omar Adrián Galdames
      </Typography>

      <IconButton onClick={() => handleClic("linkedin")}>
        <Tooltip title="Visitar mi Perfil">
          <LinkedInIcon
            sx={{ width: 35, height: 35, color: "white", marginRight: 2 }}
          />
        </Tooltip>
      </IconButton>
    </Box>
  );
};

export default Footer;
