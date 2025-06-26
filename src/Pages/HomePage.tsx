import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { pictureHomePage } from "../Store/picture";
import { Essay } from "../Models";
import { dataHomePage } from "../Store/Data/HomePage";
import { Link } from "react-scroll";
import { ArrowUpward } from "@mui/icons-material";
import "./HomePage.css";
import { motion, useScroll, useSpring } from "framer-motion";
export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const delay = {
    duration: 0.8,
    delay: 0.2,
  };
  const linksID: {
    name: string;
    id: string;
  }[] = [
    {
      name: "What Are Communication Skills?",
      id: "What-Are-Communication-Skills?",
    },
    {
      name: "Why Are Good Communication Skills Important in the Workplace?",
      id: "Why-Are-Good-Communication-Skills-Important-in-the-Workplace?",
    },
    {
      name: "Types of Communication",
      id: "Types-of-Communication",
    },
    {
      name: "12 Examples of Communication Skills",
      id: "12-Examples-of-Communication-Skills",
    },
    {
      name: "How to Use Effective Communication Examples in the Workplace",
      id: "How-to-Use-Effective-Communication-Examples-in-the-Workplace",
    },
  ];
  return (
    <Box component="main">
      <Box
        component="div"
        className=" max-w-full mb-auto relative overflow-hidden"
      >
        <Box
          component="img"
          src={pictureHomePage}
          height="91.7vh"
          className=" w-full object-cover"
        />
        <Box
          component="div"
          className="absolute w-full h-full top-0 left-0 bg-regal-blue bg-black bg-opacity-50"
        />
        <Box
          component="div"
          className="absolute w-3/4 m-auto  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-white"
        >
          <motion.p
            className="text-center pb-32 text-4xl sm:text-5xl xl:text-7xl 2xl:text-7xl "
            style={{
              fontFamily: '"Oswald", sans-serif',
            }}
            initial={{ opacity: 0, y: "-100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={delay}
          >
            Workplace Communication Skills | 12 Examples & Benefits
          </motion.p>
          <motion.p
            style={{ fontFamily: '"Oswald", sans-serif' }}
            className="text-center text-3xl sm:text-4xl xl:text-6xl 2xl:text-7xl"
            initial={{ opacity: 0, y: "150%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            exit={{ opacity: 0, y: "150%" }}
            transition={delay}
          >
            Motaz Abo Assi Last Updated: 17 October, 2025
          </motion.p>
        </Box>
      </Box>
      <Container component="div">
        <Grid component="div" container spacing={2} className=" relative">
          <Avatar
            component="div"
            sx={{
              display: { md: "none" },
              position: "sticky",
              zIndex: "5",
              overflow: "hidden",
              top: "90vh",
              left: "100%",
              backgroundColor: "#766ddd",
              padding: "1.5rem",
            }}
          >
            <Link
              activeClass="active"
              to="box-links"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <ArrowUpward fontSize="large" />
            </Link>
          </Avatar>

          <Grid component="div" size={{ xs: 12, md: 4 }} className="">
            <Box
              component="div"
              id="box-links"
              sx={{ fontFamily: ["Roboto Slab"] }}
              className=" mt-20 sticky overflow-hidden top-20 border-0 rounded-xl bg-gray-300  "
            >
              <motion.div
                style={{
                  scaleX: scaleX,
                  border: "2px solid #766ddd",
                  width: "100%",
                  padding:"0"
                }}
              />
              <Typography variant="h6" className="uppercase py-5 pl-2">
                in this article :
              </Typography>
              <Box component="ul" className="p-7 pt-0">

              {linksID.map((link, index) => (
                <Box
                component="li"
                id="links"
                key={index}
                sx={{
                    fontSize: "1rem",
                  }}
                  className=" list-decimal mb-5 text-xs "
                  >
                  <Link
                    activeClass="active"
                    to={link.id}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className=" cursor-pointer"
                    >
                    {link.name}
                  </Link>
                </Box>
              ))}
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            {dataHomePage.map((essay, index) => (
              <Essay key={index} essay={essay} />
            ))}{" "}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
