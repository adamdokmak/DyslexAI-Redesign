import Image from "next/image";
export default function Hero() {
    return (
        <div
            className='relative flex justify-between items-center my-auto mx-auto w-[100%] max-w-[1360px] py-[120px]'>
            <div className='flex flex-col ml-[34px]'>
                <div className='relative mb-[1.5rem] flex flex-col items-start'>
                    <h1 className='relative max-w-[640px] leading-[80px] tracking-[-0.04em] mx-0 text-[72px] font-[500]'>
                        We make <span
                        className='bg-[url("/underlined.svg")] [background-position:50%_115%] bg-no-repeat bg-contain py-[14px]'>Programs</span> catered
                        to your Dyslexic Needs
                    </h1>
                </div>
                <p className='relative max-w-[480px] leading-[1.5] tracking-[-0.48px] mx-0 text-[24px] font-[400]'>
                    We offer tailored, gamified exercises to boost literacy skills, and positive reinforcement
                    to
                    manage dyslexia.
                </p>
            </div>


            {/*I DO NOT KNOW HOW TO MAKE THIS FIGURE RESPONSIVE!!!!!!*/}
            <div
                className='absolute w-[80vw] h-[45vw] bottom-[30vh] -right-[20vw] scale-x-[-1] translate-x-[0] translate-y-[50%]'>
                <Image fill src='/heroimg.png' alt='Hero Image'/>
            </div>
            {/*I DO NOT KNOW HOW TO MAKE THIS FIGURE RESPONSIVE!!!!!!*/}


        </div>
    )
}