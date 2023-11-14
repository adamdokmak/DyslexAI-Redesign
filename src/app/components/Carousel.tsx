import { arrowVariants } from "@/variants/variants";
import Arrow from "@/app/SVGComponents/Arrow";
import { motion } from "framer-motion";
import ScrollingSectionItems from "./ScrollingSectionItems";

export default function Carousel({
  item,
  width,
}: {
  item: any;
  width: number;
}) {
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="text-[62px] font-medium text-center">
          Unvover Your Strengths
        </h1>
      </div>
      <div className="flex items-center justify-center gap-4 my-5">

        {/* IDK how to do buttons translate X */}
        <motion.div
          className="flex justify-center items-center w-12 h-12 border-[#151515] border-2 bg-white rounded-lg cursor-pointer"
          variants={arrowVariants}
          initial={"initial"}
          whileHover={"animateL"}
          transition={{
            duration: 0.3,
          }}
        >
          <Arrow />
        </motion.div>
        <motion.div
          className="flex justify-center items-center w-12 h-12 border-[#151515] border-2 bg-white rounded-lg cursor-pointer"
          variants={arrowVariants}
          initial={"initial"}
          whileHover={"animateR"}
          transition={{
            duration: 0.3,
          }}
        >
          <div className="scale-x-[-1]">
            <Arrow />
          </div>
        </motion.div>
        {/* IDK how to do buttons translate X */}

      </div>
      <motion.div
        ref={item}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        whileTap={{ cursor: "grabbing" }}
        className="flex w-screen h-[500px] gap-10 mt-10 mx-10 cursor-grab"
      >
        <ScrollingSectionItems
          img="/img1.png"
          text="Discover Your Superpowers"
        />
        <ScrollingSectionItems img="/img2.png" text="Tailored for success" />
        <ScrollingSectionItems img="" text="Play to Progress" />
        <ScrollingSectionItems img="" text="Charting Your Journey" />
        <ScrollingSectionItems img="" text="Triumph Tales" />
      </motion.div>
    </>
  );
}
