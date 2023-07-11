import { Box } from "@mui/material";

const PageError = () => {
  return (
    <div>
      <Box
        width="100%"
        display="flex"
        justifyContent="space-evenly"
        flexWrap="wrap"
        paddingTop={2}
        gap={2}
      >
        <img
          src="https://res.cloudinary.com/dlpr5h9qz/image/upload/v1689088863/NotFound_db94hh.jpg"
          alt="Logo"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Box>
    </div>
  );
};

export default PageError;
