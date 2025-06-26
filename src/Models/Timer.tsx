import React, { useEffect } from "react";
import CircularProgress, {
  type CircularProgressProps,
} from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useTheme, useMediaQuery, Typography, type Theme } from "@mui/material";

export default function CircularProgressWithLabel(
  props: CircularProgressProps & {
    nextquize: () => void;
    setClick: () => void;
    isClick: boolean;
  }
) {
  const [progress, setProgress] = React.useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (props.isClick) {
          props.setClick();
          return 0;
        }
        if (prevProgress === 200) props.nextquize();
        return prevProgress >= 200 ? 0 : prevProgress + 10;
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [props]);

  const theme: Theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const size = isSmUp ? 100 : 70;

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        margin: { xs: "auto", md: "0" },
      }}
    >
      <CircularProgress
        variant="determinate"
        size={size}
        {...props}
        value={progress}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant={isSmUp ? "h4" : "inherit"}
          component="div"
          sx={{ color: "text.secondary" }}
        >{`${progress / 10}s`}</Typography>
      </Box>
    </Box>
  );
}
