import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor:"#0f4a8d", color:"#ffffff", height:"5rem", borderRadius:2, mt:4 }}>
      <Container sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
        <Typography sx={{ textAlign: "center" }} fontSize={18} fontFamily={"monospace"}>Este es el footer</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
