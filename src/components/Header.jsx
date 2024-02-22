import { Box } from "@mui/material";
import img from "../imgs/writeit-logo.png";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0f4a8d",
        height: "8rem",
        borderRadius: 2,
        mb: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "120%",
          background: `url(${img}) no-repeat center center`,
          backgroundSize: "contain",
        }}
      />
    </Box>
  );
};

export default Header;
