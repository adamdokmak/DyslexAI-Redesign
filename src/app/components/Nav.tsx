import {motion} from "framer-motion";
import Logo from "@/app/SVGComponents/Logo";
import Send from "@/app/SVGComponents/Send";
import useCursorAnimation from "@/hooks/useCursorAnimation";

export default function Nav({inView}: { inView: boolean}) {
    const top = (useCursorAnimation().mouseY) * 1.3 - (useCursorAnimation().mouseY)
    const left = (useCursorAnimation().mouseX) * 1.55 - (useCursorAnimation().mouseX)
    // do not touch this math, it works
    return (
      <>
        <motion.div
          className="absolute w-[560px] h-[560px] bg-gradient-to-r from-teal-300 to-cyan-600 blur-[80px] will-change-transform rounded-full -z-50 "
          initial={{ top: 0, left: 0 }}
          animate={{ top: top + "px", left: left + "px" }}
          transition={{
            type: "tween",
          }}
        />
        <div className="relative h-[96px] flex justify-between lg:justify-center items-center max-w-[1360px] mx-auto">
          <div className="ml-[34px]">
            <Logo />
          </div>
          <div className="hidden items-center justify-center mx-auto lg:flex ">
            <div className="flex justify-between items-center mx-auto">
              <a className="[text-decoration:none] p-[16px] group cursor-pointer">
                <div className="h-[20px] overflow-hidden">
                  <div className="transition-all duration-300 text-black group-hover:-translate-y-[20px] tracking-[0.28px] uppercase text-[14px] font-[700] whitespace-nowrap">
                    portfolio
                  </div>
                  <div className="transition-all duration-300 text-black group-hover:-translate-y-[20px] translate-y-[20px] tracking-[0.28px] uppercase text-[14px] font-[700] whitespace-nowrap">
                    portfolio
                  </div>
                </div>
              </a>
            </div>
            <div className="flex justify-between items-center mx-auto">
              <a className="[text-decoration:none] p-[16px] group cursor-pointer ">
                <div className="h-[20px] overflow-hidden">
                  <div className="text-black tracking-[0.28px] transition-all duration-300 group-hover:-translate-y-[20px] uppercase text-[14px] font-[700] whitespace-nowrap">
                    Process
                  </div>
                  <div className="text-black tracking-[0.28px] translate-y-[20px] transition-all duration-300 group-hover:-translate-y-[20px] uppercase text-[14px] font-[700] whitespace-nowrap">
                    Process
                  </div>
                </div>
              </a>
            </div>
            <div className="flex justify-between items-center mx-auto">
              <a className="[text-decoration:none] p-[16px] group cursor-pointer ">
                <div className="h-[20px] overflow-hidden">
                  <div className="text-black tracking-[0.28px] transition-all duration-300 group-hover:-translate-y-[20px] uppercase text-[14px] font-[700] whitespace-nowrap">
                    webflow
                  </div>
                  <div className="text-black tracking-[0.28px] translate-y-[20px] transition-all duration-300 group-hover:-translate-y-[20px] uppercase text-[14px] font-[700] whitespace-nowrap">
                    webflow
                  </div>
                </div>
              </a>
            </div>
            <div className="flex justify-between items-center mx-auto">
              <a className="[text-decoration:none] p-[16px] group cursor-pointer ">
                <div className="h-[20px] overflow-hidden">
                  <div className="text-black tracking-[0.28px] transition-all duration-300 group-hover:-translate-y-[20px] uppercase text-[14px] font-[700] whitespace-nowrap">
                    team
                  </div>
                  <div className="text-black tracking-[0.28px] translate-y-[20px] transition-all duration-300 group-hover:-translate-y-[20px] uppercase text-[14px] font-[700] whitespace-nowrap">
                    team
                  </div>
                </div>
              </a>
            </div>
            <div className="flex justify-between items-center mx-auto">
              <a className="[text-decoration:none] p-[16px] group cursor-pointer ">
                <div className="h-[20px] overflow-hidden">
                  <div className="text-black tracking-[0.28px] transition-all duration-300 group-hover:-translate-y-[20px] uppercase text-[14px] font-[700] whitespace-nowrap">
                    activity
                  </div>
                  <div className="text-black tracking-[0.28px] translate-y-[20px] transition-all duration-300 group-hover:-translate-y-[20px] uppercase text-[14px] font-[700] whitespace-nowrap">
                    activity
                  </div>
                </div>
              </a>
            </div>
            <div className="flex justify-between items-center mx-auto">
              <a className="[text-decoration:none] p-[16px] group cursor-pointer ">
                <div className="h-[20px] overflow-hidden">
                  <div className="text-black tracking-[0.28px] transition-all duration-300 group-hover:-translate-y-[20px] uppercase text-[14px] font-[700] whitespace-nowrap">
                    relume library
                  </div>
                  <div className="text-black tracking-[0.28px] translate-y-[20px] transition-all duration-300 group-hover:-translate-y-[20px] uppercase text-[14px] font-[700] whitespace-nowrap">
                    relume library
                  </div>
                </div>
              </a>
            </div>
          </div>
          <motion.div
            className={
              `fixed right-0 top-0 flex justify-between items-center mt-[22px] mr-[44px] px-4 py-5 w-[130px] h-[50px] ${inView? 'bg-white' : 'bg-[#0A0A0A]'} ${inView? 'text-[#0A0A0A]' : 'text-white'} rounded-lg cursor-pointer z-[999]`
            }
            whileHover={{ translateY: -2 }}
          >
            <div className="w-4 h-4">
              <Send />
            </div>
            <h1 className=" text-sm font-[700] tracking-[0.28px] uppercase">
              Contact
            </h1>
          </motion.div>
        </div>
      </>
    );
}