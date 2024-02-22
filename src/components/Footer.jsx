import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0f4a8d",
        color: "#ffffff",
        height: "5rem",
        borderRadius: 2,
        mt: 4,
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Typography
          sx={{ textAlign: "center", color: "#d4ae41" }}
          fontSize={18}
          fontFamily={"monospace"}
        >
          Website made by{" "}
          <a
            href="https://facundo-nedic.zeabur.app/"
            target="_blank" rel="noopener noreferrer"
            style={{ color: "#fbce4e", textDecoration: "underline" }}
          >
            Facundo Nedic
          </a>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
