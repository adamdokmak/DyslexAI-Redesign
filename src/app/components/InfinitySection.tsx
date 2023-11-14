import InfinityText from "@/app/components/InfinityText";
import { motion, MotionValue } from "framer-motion";

export default function InfinitySection({ x }: { x: MotionValue<string> }) {
  return (
    <motion.div className="flex justify-center cursor-help items-center" style={{ x: x }}>
      <InfinityText mainText="5-10%" subText="Prevelance" />
      <InfinityText mainText="95%" subText="Positive Response" />
      <InfinityText mainText="35%" subText="Successful Entrepreneurs" />
      <InfinityText mainText="2-3 Grades" subText="Reading Gap" />
      <InfinityText mainText="30-40%" subText="Have ADHD" />
      <InfinityText mainText="20-40%" subText="Have Dyscalculia" />
      <InfinityText mainText="15-30%" subText="Have Dysgraphia" />
    </motion.div>
  );
}
