import React from 'react'

const Textbar = ({ text, svg, indexed, selected, activesvg, handletextbarclick }) => {






    return (
        <div key={indexed + 1} onClick={() => handletextbarclick(indexed + 1)} class="relative w-full cursor-pointer text-center">
            <div class="w-[265px] overflow-hidden rounded px-3 py-3 xl:w-[285px] xl:px-4 xl:py-5">
                <div class="flex items-center gap-[6px]">
                    <div class="text-2xl md:text-[26px]">
                        {selected === indexed + 1 ? activesvg() : svg()}
                    </div>
                    <p class={`relative z-10 text-nowrap !font-SpaceGrotesk text-lg/6 font-semibold tracking-[-0.5px] xl:text-xl/6 ${indexed + 1 === selected ? 'text-active' : 'text-primary'}`}>{text}</p>
                </div>
                {
                    indexed + 1 === selected &&
                    <div class="animate-fill absolute bg-[rgb(16,39,13)] bottom-0 left-0 z-10 h-2 w-full overflow-hidden rounded-full bg-secondary"></div>
                }

                <div class="absolute bottom-0 left-0 z-0 h-2 w-full rounded-full bg-[#CFD4D0]"></div>
            </div>
        </div>
    )
}

export default Textbar
