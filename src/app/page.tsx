"use client";
import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import {motion, useInView, useScroll, useSpring, useTransform} from "framer-motion";
import InfinitySection from "@/app/components/InfinitySection";
import { useEffect, useRef, useState } from "react";
import Carousel from "@/app/components/Carousel";
import Image from "next/image";
import ScrollingContainer from "@/app/components/ScrollingContainer";

export default function Home() {
  const [width, setWidth] = useState<any>(0);
  const [inView, setInView] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const springedProgress = useSpring(scrollY, { damping: 50 });
  const x = useTransform(springedProgress, [200, 900], ["1vw", "-50vw"]);

  window.addEventListener("scroll", () => console.log(scrollY.get()))

  // clueless about the type of ref
  const item = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    //cannot for the life of me figure out the left constraint
    setWidth(item.current!.scrollWidth - window.innerWidth);
  }, []);

  return (
    <>
      <section className='bg-[url("/grain.png")] bg-[length:300px_300px] h-screen w-screen overflow-hidden'>
        <Nav inView={inView}/>
        <Hero />
      </section>
      <section className='bg-[url("/grain.png")] bg-[length:300px_300px] flex justify-start items-center px-[32px] h-[250px] w-screen overflow-hidden'>
        <InfinitySection x={x} />
      </section>
      <section className='bg-[url("/grain.png")] bg-[length:300px_300px]flex flex-col justify-start items-center w-screen h-screen overflow-hidden'>
        <Carousel item={item} width={width} />
      </section>
      <section className="w-screen bg-[#0A0A0A] selection:bg-white selection:text-[#0A0A0A]">
        <div className="flex flex-col justify-center items-center pt-[120px] pb-[80px]">
          <div className="flex flex-col justify-center items-center text-center text-white pb-20">
            <h1 className="text-[62px] font-medium">But how do we do it?</h1>
            <p className="text-[28px] font-light">Here is an overview</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-x-4">
            <div></div>
            <ScrollingContainer
              img="/img3.svg"
              mainText="Diagnosis"
              subText="Figure out what to do..."
              infoText="1 chapter"
              description="Al-powered assessments detect dyslexia in children."
            />
            <ScrollingContainer
              img="/img5.svg"
              mainText="Gamified Activities"
              subText="Begin Learning..."
              infoText="1 chapter"
              description="Gamified activities address reading and writing challenges."
            />
            <ScrollingContainer
              img="/img6.svg"
              mainText="Machine Learning"
              subText="Tailored to each learner"
              infoText="1 chapter"
              description="Machine learning tracks data and progress for personalized support."
            />
            <ScrollingContainer
              img="/img7.svg"
              mainText="Challenging Components"
              subText="Exceed your limits"
              infoText="1 chapter"
              description="Stuck somewhere? just move on as our components are reusable"
            />
            <ScrollingContainer
              img="/img8.svg"
              mainText="Moving Along"
              subText="Show your progress"
              infoText="1 chapter"
              description="Get placed at your level based on your existing skillset, move up the leaderboard"
            />
          </div>
        </div>
      </section>
    </>
  );
}
