import { Button, Container, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <Container
      component="div"
      className="w-full h-full flex justify-center items-center text-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.4,
        }}
        className=" animate-bounce "
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Roboto Slab",
          }}
        >
          Page Not Found 🤔
        </Typography>
        <br />
        <Link to="/">
          <Button variant="outlined">
            <ArrowBack fontSize="medium" className="mr-1" />
            Back to Course
          </Button>
        </Link>
      </motion.div>{" "}
    </Container>
  );
}
