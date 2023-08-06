import { useState } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

const CompraTerminadaContainer = ({ orderId }) => {
  const [copied, setCopied] = useState(false);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap={2}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: "primary.dark" }}
        borderRadius="20px"
        p={2}
      >
        <VerifiedIcon color="info" sx={{ width: 100, height: 100 }} />
        <Typography variant="subtitle1" sx={{ color: "white", mt: 2 }}>
          Su compra fue registrada exitosamente con el codigo:{" "}
        </Typography>
        <CopyToClipboard text={orderId}>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              backgroundColor: "primary.light",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              p: 1,
              mt: 1,
              mb: 1,
            }}
          >
            {orderId}
            <Button
              variant="outlined"
              size="small"
              sx={{ color: "white", ml: 4 }}
              onClick={() => setCopied(true)}
              startIcon={<ContentCopyIcon />}
            >
              {copied ? "Copiado" : "Copiar"}
            </Button>
          </Typography>
        </CopyToClipboard>
        <Typography variant="h4" sx={{ color: "white", mt: 3 }}>
          Gracias por su compra!
        </Typography>
      </Box>
      <Link to="/">
        <Button size="large" variant="contained">
          Seguir comprando
        </Button>
      </Link>
    </Box>
  );
};
export default CompraTerminadaContainer;
