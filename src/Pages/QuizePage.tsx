import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import {
  NavigateNext,
  CheckCircle,
  Done,
  Cancel,
} from "@mui/icons-material";
import { Timer, ButtonDetail } from "../Models";
import { dataQuestions } from "../Store/Data/QuizePage";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
export default function QuizePage() {
  const [accept, setAccept] = useState(false);
  const [index, setIndex] = useState(0);
  const [click, setClick] = useState(false);
  const [rateQuestion, setRateQuestion] = useState(0);
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const copyDataQuestion = dataQuestions;

  const nextQuize = () => {
    copyDataQuestion[index].answer = selectedValue;
    setRateQuestion((prevValue) => {
      return (prevValue +=
        selectedValue === copyDataQuestion[index].correctAnswer ? 1 : 0);
    });
    setIndex((prevIndex) => prevIndex + 1);
    setSelectedValue(null);
  };
  const changeClick = () => {
    setClick(!click);
  };

  const handleRadioClick = (i: number) => {
    setSelectedValue((prev) => (prev === i ? null : i)); // toggle
  };

  if (!accept)
    return (
      <Grid
        container
        spacing={2}
        component="div"
        className="w-full h-full flex justify-center items-center p-5 bg-secondary overflow-hidden  "
      >
        <motion.div
          initial={{ opacity: 0, y: "-160%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "150%" }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
        >
          <Grid
            size={{ xs: 12, md: 6.5, lg: 8 }}
            container
            component="div"
            className="m-auto"
          >
            <Stack direction={{ xs: "column", sm: "row" }}>
              <Box component="div">
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: '"Fira Sans", sans-serif',
                    fontWeight: 900,
                    fontSize: { xs: "inherit", lg: "4rem", xl: "6rem" },
                  }}
                >
                  Test your knowledge on
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: '"Fira Sans", sans-serif',
                    fontWeight: 900,
                    color: "#766ddd",
                    fontSize: { xs: "inherit", lg: "4rem", xl: "6rem" },
                  }}
                >
                  communication
                </Typography>
              </Box>
              <Avatar
                component="div"
                sx={{
                  padding: "3rem",
                  margin: { xs: "1rem auto ", md: "" },
                  marginLeft: { xs: "", sm: "2rem" },
                  height: { xs: "6rem", lg: "8rem", xl: "15rem" },
                  width: { xs: "6rem", lg: "8rem", xl: "15rem" },
                  backgroundColor: "red",
                }}
              >
                <Box
                  component="p"
                  className=" -rotate-45"
                  sx={{
                    fontFamily: '"Fira Sans", sans-serif',
                    fontWeight: 900,
                    fontSize: { xs: "2rem", lg: "3rem", xl: "5rem" },
                  }}
                >
                  30
                  <br />
                  Qs
                </Box>
              </Avatar>
            </Stack>
          </Grid>
          <Grid container component="div" size={{ xs: 12 }}>
            <Button
              variant="contained"
              className="capitalize"
              sx={{
                margin: "auto",
                borderRadius: "0.5rem",
                fontSize: {
                  xs: "1rem",
                  lg: "1.5rem",
                  "2xl": "3rem",
                },
                backgroundColor: "#766ddd",
              }}
              onClick={() => setAccept(true)}
            >
              <Done
                className="mr-2 "
                sx={{
                  fontSize: {
                    xs: "1rem",
                    lg: "1.5rem",
                    "2xl": "3rem",
                  },
                }}
              />
              Accept
            </Button>
          </Grid>
        </motion.div>
      </Grid>
    );
  else if (index <= 29)
    return (
      <Grid
        container
        columns={12}
        component="section"
        className="w-full my-auto  p-5"
      >
        <motion.div
          key={index}
          initial={{ x: "-150%" }}
          animate={{ x: 0 }}
          exit={{ x: "150%" }}
          className="sm:x-full md:w-3/4 lg:w-3/4 h-full m-auto"
        >
          <Stack
            direction={{ xs: "column-reverse", md: "row" }}
            className="h-full m-auto"
          >
            <Grid size={{ xs: 0, md: 1 }} />
            <Grid
              size={"grow"}
              component="div"
              className="border-0 bg-secondary p-5 rounded-xl select-none  "
            >
              <Stack component="div" className="h-full ">
                <TypeAnimation
                  key={`${index}`}
                  preRenderFirstString={true}
                  cursor={false}
                  sequence={[
                    index + 1 + ". ",
                    500,
                    index + 1 + ". " + copyDataQuestion[index].questionContent,
                    500,
                  ]}
                  speed={70}
                  style={{
                    fontSize: "x-large",
                    fontFamily: '"Fira Sans", sans-serif',
                    fontWeight: 900,
                    paddingBottom: "1rem",
                  }}
                />

                <RadioGroup value={selectedValue}>
                  {copyDataQuestion[index].choices.map((choice, i) => (
                    <Box component="div" key={i}>
                      <Radio
                        value={i}
                        sx={{
                          accentColor: "#766ddd",
                          mixBlendMode: "multiply",
                        }}
                        checked={selectedValue === i}
                        onClick={() => handleRadioClick(i)}
                      />
                      <TypeAnimation
                        key={`${index}`}
                        cursor={false}
                        sequence={[choice]}
                        speed={70}
                        style={{
                          fontSize: "large",
                        }}
                      />
                    </Box>
                  ))}
                </RadioGroup>
                <Box
                  component="div"
                  className=" ml-auto mt-auto w-full flex justify-between"
                >
                  <Button
                    variant="contained"
                    className=""
                    sx={{
                      marginRight: "auto",
                      backgroundColor: "#766ddd",
                    }}
                    onClick={() => {
                      changeClick();
                      nextQuize();
                    }}
                  >
                    next <NavigateNext fontWeight="small" />
                  </Button>
                </Box>
              </Stack>
            </Grid>
            <Grid
              container
              component="div"
              className=" lg:h-0 p-5 "
              size={{ xs: 12, md: 1.5 }}
            >
              <Timer
                nextquize={nextQuize}
                setClick={changeClick}
                isClick={click}
              />
            </Grid>
          </Stack>
        </motion.div>
      </Grid>
    );
  else
    return (
      <Box
        component="div"
        className="w-full flex justify-center "
        sx={{
          position: "relative",
        }}
      >
        <Box component="div">
          <Box component="div" className="mt-5 text-center">
            <Typography
              variant="h3"
              className="uppercase"
              sx={{
                fontFamily: "Roboto Slab",
              }}
            >
              resault
            </Typography>
            <br />
            <Typography component="h4" variant="h4">
              {((rateQuestion * 100) / 30).toFixed(2)}%
            </Typography>
          </Box>
          <Box
            component="div"
            className=" my-5 grid sm:grid-cols-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  w-4/5 m-auto gap-4 "
          >
            {copyDataQuestion.map((question, i) => (
              <Box
                component="div"
                key={i}
                className={` text-center border-4 rounded-xl p-5  flex flex-col justify-between ${
                  question.correctAnswer === question.answer
                    ? "border-green-700"
                    : "border-red-700"
                }`}
              >
                <Typography variant="h5">
                  {i + 1 + ". " + question.questionContent}
                </Typography>
                {question.correctAnswer !== question.answer && (
                  <Typography
                    variant="h6"
                    className="text-red-500 p-1 rounded-lg"
                  >
                    <Cancel/>
                    {question.answer !== null
                      ? question.choices[question.answer]
                      : "Not Choice "}
                  </Typography>
                )}
                <Typography variant="h6" className="text-green-500">
                  <CheckCircle/>{" "}
                  {question.choices[question.correctAnswer]}
                </Typography>
                <ButtonDetail
                  because={question.because}
                  source={question.source}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    );
}
