import { Box } from "@mui/material";
import type { EssayType } from "../types/EssayType";
import { motion } from "framer-motion";

export default function Essay({ essay }: { essay: EssayType }) {
  // const [sign, setSign] = useState(false);
  let sign = false;
  const delay = {
    duration: 0.5,
    delay: 0.3,
  };
  const addImage = () => {
    if (!essay.image) return null;
    return (
      <motion.div
        initial={{ opacity: 0, x: "10%" }}
        whileInView={{ opacity: 1, x: "0" }}
        viewport={{ once: true }}
        exit={{ opacity: 0, x: "5%" }}
        transition={delay}
      >
        <Box
          component="img"
          src={essay.image}
          className="sm:w-full lg:w-10/12 lg:m-auto h-full  object-fill rounded-3xl border-4 border-website"
        />
      </motion.div>
    );
  };
  const addTitleEssay = () => {
    if (!essay.titleEssay) return null;
    return (
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        exit={{ opacity: 0 }}
        transition={delay}
        className=" text-lg md:text-2xl lg:text-4xl font-extrabold"
      >
        {essay.titleEssay}
      </motion.h3>
    );
  };
  const addBodyToTitle = () => {
    sign = !sign;
    return essay.content.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: sign ? "-10%" : "10%" }}
        whileInView={{ opacity: 1, x: "0" }}
        viewport={{ once: true }}
        exit={{ opacity: 0, x: "5%" }}
        transition={delay}
      >
        <br />
        <Box component="div" className="font-bold text-xl md:text-2xl pb-5">
          {item.title}
        </Box>
        {item.body.map((cont, ind) => (
          <Box key={ind} component="div" className="text-lg mb-5">
            {cont}
          </Box>
        ))}
      </motion.div>
    ));
  };
  return (
    <Box component="div" className="overflow-hidden">
      {addImage()}
      {addTitleEssay()}
      {addBodyToTitle()}
    </Box>
  );
}
