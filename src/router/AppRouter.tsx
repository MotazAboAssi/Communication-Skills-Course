
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Stack } from "@mui/material";
import { HomePage, NotFoundPage } from "../Pages";
import { Footer, Header } from "../Models";
import QuizePage from "../Pages/QuizePage";
import { AnimatePresence } from "framer-motion";
export default function RouterApp() {
  return (
    <>
      <Router>
        <AnimatePresence>
          <Stack
            spacing={0}
            justifyContent="space-between"
            height="100vh"
            width="100%"
          >
            <Header />
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/course" element={<HomePage />} />
              <Route path="/quize" element={<QuizePage />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
          </Stack>
        </AnimatePresence>
      </Router>
    </>
  );
}
