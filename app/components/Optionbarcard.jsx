import Image from 'next/image'
import React from 'react'

const Optionbarcard = ({ details, bgcolor }) => {
    // console.log(details);

    return (
        <div style={{ backgroundColor: bgcolor }} class={`rounded-[20px] px-5 py-[25px] md:py-[50px] lg:h-[576px] lg:px-[34px]`}>
            <div class="mb-[36px]">
                <div class="mb-4 flex items-center gap-[10px] md:mb-[21px]">
                    <h2 class="text-lg font-semibold tracking-[-0.5px] xs:text-[28px]/[35px] md:h-[52px] lg:h-fit">{details.title}</h2>
                </div>
                <p class="text-sm tracking-[-0.5px] text-primary4 xs:text-[16px]/[20px] md:h-[72px]">
                    {details.desc}
                </p>
            </div>
            <div>
                <Image src={'https://screener.hyring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBeforeAfterImage1.4ea001eb.png&w=640&q=75'} alt="" width={552} height={285} />
            </div>

        </div>
    )
}

export default Optionbarcard
