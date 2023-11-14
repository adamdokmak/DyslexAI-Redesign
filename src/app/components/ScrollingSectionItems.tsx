import Image from "next/image";
export default function scrollingSectionItems({img, text}: {img: string, text: string}) {
    return (
      <div className=" flex flex-col justify-start items-start h-full min-w-[500px] border-[#151515] border-2 bg-white rounded-2xl p-[24px] overflow-hidden">
        <div className="relative border-2 border-[#151515] w-full h-[85%] rounded-xl overflow-hidden pointer-events-none">
          <Image fill src={img} alt=""></Image>
        </div>
        <p className="text-[20px] pt-6">{text}</p>
      </div>
    );
}