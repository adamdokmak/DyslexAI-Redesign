import Image from "next/image";
export default function ScrollingContainer({img, mainText, subText , infoText, description}: {img: string, mainText: string, subText: string, infoText: string, description: string}) {
    return (
      <div className="relative border-2 h-[300px] border-white rounded-xl p-6 m-6">
        <div className="flex w-[50vw] justify-start items-center">
          <div className='relative bg-[url("/img4.png")] bg-no-repeat bg-cover [background-position:50%] min-w-[240px] h-[240px]'>
            <Image
              fill
              className="absolute left-0 top-0"
              src={img}
              alt=""
            ></Image>
          </div>
          <div className="absolute right-[24px] top-[24px] flex justify-center items-center text-center w-[90px] h-7 bg-white rounded-lg">
            <h1 className="text-[#0A0A0A] text-[14px] font-bold uppercase">
              {infoText}
            </h1>
          </div>
          <div className="flex ml-[24px] flex-col gap-4">
            <h1 className="text-white text-[32px] font-medium">{mainText}</h1>
            <h2 className="text-white text-[20px] font-[400]">
                {subText}
            </h2>
            <p className="text-[#A9A9A9] text-[16px] ">
                {description}
            </p>
          </div>
        </div>
      </div>
    );
}