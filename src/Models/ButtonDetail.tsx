import * as React from "react";
import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  Stack,
  Typography,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "3px solid #766ddd",
  boxShadow: 24,
  p: 4,
};

export default function ButtonDetail({
  because,
  source,
}: {
  because: string;
  source: string;
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="contained"
        sx={{
          textTransform: "capitalize",
        }}
        onClick={handleOpen}
      >
        Detail
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open} className="w-full ">
          <Stack flexWrap="wrap" component="div" className="h-full">
            <Box sx={style} component="div" className="rounded-xl text-wrap ">
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Because:
                <br />
                {because}
              </Typography>
              <Typography
                id="transition-modal-description"
                className=" text-wrap"
                sx={{ mt: 2 }}
              >
                <br />
                <Box
                  component="a"
                  href={source}
                  className="text-blue-600 underline text-wrap"
                >
                  🔗 Source Question:
                </Box>
              </Typography>
            </Box>
          </Stack>
        </Fade>
      </Modal>
    </div>
  );
}
