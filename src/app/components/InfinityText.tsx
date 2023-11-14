export default function InfinityText({mainText, subText}: { mainText: string, subText: string }) {
    return (
        <div className='flex justify-center items-center w-[150px] h-[100px] mr-[150px]'>
            <div className='flex flex-col justify-center items-center text-center text-[#151515] whitespace-nowrap'>
                <h1 className='text-[42px] font-bold leading-none'>{mainText}</h1>
                <p className='text-[18px] font-light'>{subText}</p>
            </div>
        </div>
    )
}