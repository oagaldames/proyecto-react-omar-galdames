import { Box, CircularProgress, Typography } from "@mui/material";

const Spinner = ({ msgSpinner }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress color="primary" size={40} />
      <Typography variant="h5" textAlign="center" marginTop={2}>
        {msgSpinner}
      </Typography>
    </Box>
  );
};

export default Spinner;
