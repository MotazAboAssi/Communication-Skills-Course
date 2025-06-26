import { Phone, WhatsApp, Telegram, Email, GitHub } from "@mui/icons-material";
import { Box, Container, IconButton, Tooltip, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      className=" mt-auto w-full"
      sx={{
        backgroundColor: "#766edd",
      }}
    >
      <Container className="flex flex-col justify-center items-center">
        <Typography
          component="p"
          className="text-white"
          sx={{
            fontSize: { md: "1rem", lg: "1.5rem ", "2xl": "2rem" },
          }}
        >
          &copy; Cloud Assess 2025 | Dev.Motaz Abo Assi
        </Typography>
        <Box>
          <Tooltip placement="top-start" title="Call Me">
            <IconButton
              component="a"
              href="tel:+963998548589" // Replace with your number
              sx={{ color: "white" }} // Green
            >
              <Phone fontSize="large" />
            </IconButton>
          </Tooltip>

          <Tooltip title="WhatsApp">
            <IconButton
              component="a"
              href="https://wa.me/+963998548589"
              target="_blank"
              rel="noopener"
              sx={{ color: "white" }}
            >
              <WhatsApp fontSize="large" />
            </IconButton>
          </Tooltip>
          {/* Telegram */}
          <Tooltip title="Telegram">
            <IconButton
              component="a"
              href="https://t.me/Mo3tazAboAssi"
              target="_blank"
              rel="noopener"
              sx={{ color: "white" }}
            >
              <Telegram fontSize="large" />
            </IconButton>
          </Tooltip>
          {/* Email */}
          <Tooltip title="Email Me">
            <IconButton
              component="a"
              href="mailto:motazaboassi@gmail.com"
              sx={{ color: "white" }}
            >
              <Email fontSize="large" />
            </IconButton>
          </Tooltip>
          {/* GitHub */}
          <Tooltip title="GitHub">
            <IconButton
              component="a"
              href="https://github.com/MotazAboAssi"
              target="_blank"
              rel="noopener"
              sx={{ color: "white" }}
            >
              <GitHub fontSize="large" />
            </IconButton>
          </Tooltip>
        </Box>
      </Container>
    </Box>
  );
}
