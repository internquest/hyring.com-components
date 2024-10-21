'use client'
import React, { useEffect, useRef, useState } from 'react'
import Marqueecompo from './Marqueecompo'
import Image from 'next/image'

import UniqueIndividual from './UniqueIndividual'

const Unique = () => {




    const parentRef = useRef(null)




    return (
        <div ref={parentRef} class=" bg-[#f8f8f8] px-2  md:px-4">
            <div class="mx-auto w-full max-w-[1280px]">
                <div class="sticky top-5 md:top-3">
                    <div class="pb-[30px] md:pb-[45px]">
                        <Marqueecompo />
                    </div>
                </div>

                <UniqueIndividual parentRef={parentRef} bglecolor='rgb(231, 247, 223)' id='0' bgricolor='rgb(215, 245, 198)' />

                <UniqueIndividual parentRef={parentRef} bglecolor='rgb(247, 223, 235)' key={1} id='1' bgricolor='rgb(245, 197, 222)' />
                <UniqueIndividual parentRef={parentRef} bglecolor='rgb(247, 223, 235)' key={2} id='2' bgricolor='rgb(245, 197, 222)' />
                <UniqueIndividual parentRef={parentRef} bglecolor='rgb(247, 223, 235)' key={3} id='3' bgricolor='rgb(245, 197, 222)' />

                {/* <div ref={indivref} style={{ transform: `scale3d(${1 - scrollvalue},${1 - scrollvalue},1)`, transformStyle: "preserve-3d" }} class="sticky top-[105px] md:top-[190px]" >
                    <div class="featuresCard mb-[32px] flex w-full flex-col md:flex-row">

                        <div class="w-full rounded-t-[10px] p-5 md:rounded-l-[36px] md:rounded-tr-[0px] xl4:h-[507px]" style={{ backgroundColor: "rgb(231, 247, 223)" }} >
                            <div class="flex h-full sm:items-center">
                                <div class="px-5 py-6 md:px-[38px]"><div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 50 50" class="text-[50px]"><rect width="50" height="50" fill="#9CE56D" opacity="0.3" rx="25"></rect><rect width="40" height="40" x="5" y="5" fill="#9CE56D" rx="20"></rect><path stroke="#102713" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m30.93 29.426.357 2.897c.091.76-.725 1.292-1.375.898L26.07 30.94q-.633 0-1.238-.083a4.46 4.46 0 0 0 1.082-2.897c0-2.603-2.255-4.711-5.042-4.711a5.2 5.2 0 0 0-2.86.834 6 6 0 0 1-.036-.697c0-4.17 3.62-7.553 8.094-7.553s8.094 3.383 8.094 7.553c0 2.475-1.274 4.666-3.236 6.041"></path><path stroke="#102713" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M25.915 27.958c0 1.09-.403 2.099-1.081 2.896-.908 1.1-2.347 1.806-3.96 1.806l-2.393 1.421c-.403.247-.917-.092-.862-.56l.23-1.805c-1.229-.852-2.017-2.218-2.017-3.758 0-1.614.862-3.034 2.182-3.878a5.2 5.2 0 0 1 2.86-.834c2.786 0 5.041 2.108 5.041 4.712"></path>
                                    </svg>
                                </div>
                                    <h2 class="mt-5 font-SpaceGrotesk text-[24px] font-bold tracking-[-0.25px] text-active md:text-[30px]">Human-like interviews</h2>
                                    <p class="mt-2.5 font-SpaceGrotesk text-sm font-normal tracking-[-0.5px] text-primary2 sm:mt-4 md:text-[18px]/[22px]">90% of existing AI interviewers are robotic making the process disrespectful and intimidating.</p>
                                </div>
                            </div>
                        </div>
                        <div class="relative w-full">
                            <div class="flex-center sm:[450px] relative z-10 w-full rounded-b-[10px] p-5 md:rounded-[36px] xl4:h-[507px]" style={{ backgroundColor: "rgb(215, 245, 198)" }}>

                                <Image src={'https://screener.hyring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHumanLikeImage.bc91b7de.png&w=1080&q=100'} alt='human-like-interview' width={532} height={373} className='hidden md:block' />
                                <Image src={'https://screener.hyring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHumanLikeImage.bc91b7de.png&w=1080&q=100'} alt='human-like-interview' width={332} height={240} className='md:hidden' />

                            </div>

                            <div class="absolute left-0 top-0 z-0 hidden h-full w-full sm:block sm:rounded-r-[36px]" style={{ backgroundColor: "rgb(231, 247, 223)" }}></div>
                        </div>

                    </div>

                </div> */}



                <div class="sticky top-[105px] md:top-[190px]" style={{ transformStyle: "preserve-3d" }}>
                    <div class="featuresCard mb-[32px] flex w-full flex-col md:flex-row">

                        <div class="w-full rounded-t-[10px] p-5 md:rounded-l-[36px] md:rounded-tr-[0px] xl4:h-[507px]" style={{ backgroundColor: 'rgb(231, 247, 223)' }} >
                            <div class="flex h-full sm:items-center">
                                <div class="px-5 py-6 md:px-[38px]"><div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 50 50" class="text-[50px]"><rect width="50" height="50" fill="#9CE56D" opacity="0.3" rx="25"></rect><rect width="40" height="40" x="5" y="5" fill="#9CE56D" rx="20"></rect><path stroke="#102713" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m30.93 29.426.357 2.897c.091.76-.725 1.292-1.375.898L26.07 30.94q-.633 0-1.238-.083a4.46 4.46 0 0 0 1.082-2.897c0-2.603-2.255-4.711-5.042-4.711a5.2 5.2 0 0 0-2.86.834 6 6 0 0 1-.036-.697c0-4.17 3.62-7.553 8.094-7.553s8.094 3.383 8.094 7.553c0 2.475-1.274 4.666-3.236 6.041"></path><path stroke="#102713" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M25.915 27.958c0 1.09-.403 2.099-1.081 2.896-.908 1.1-2.347 1.806-3.96 1.806l-2.393 1.421c-.403.247-.917-.092-.862-.56l.23-1.805c-1.229-.852-2.017-2.218-2.017-3.758 0-1.614.862-3.034 2.182-3.878a5.2 5.2 0 0 1 2.86-.834c2.786 0 5.041 2.108 5.041 4.712"></path>
                                    </svg>
                                </div>
                                    <h2 class="mt-5 font-SpaceGrotesk text-[24px] font-bold tracking-[-0.25px] text-active md:text-[30px]">Human-like interviews</h2>
                                    <p class="mt-2.5 font-SpaceGrotesk text-sm font-normal tracking-[-0.5px] text-primary2 sm:mt-4 md:text-[18px]/[22px]">90% of existing AI interviewers are robotic making the process disrespectful and intimidating.</p>
                                </div>
                            </div>
                        </div>
                        <div class="relative w-full">
                            <div class="flex-center sm:[450px] relative z-10 w-full rounded-b-[10px] p-5 md:rounded-[36px] xl4:h-[507px]" style={{ backgroundColor: "rgb(215, 245, 198)" }}>

                                <Image src={'https://screener.hyring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHumanLikeImage.bc91b7de.png&w=1080&q=100'} alt='human-like-interview' width={532} height={373} className='hidden md:block' />
                                <Image src={'https://screener.hyring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHumanLikeImage.bc91b7de.png&w=1080&q=100'} alt='human-like-interview' width={332} height={240} className='md:hidden' />

                            </div>

                            <div class="absolute left-0 top-0 z-0 hidden h-full w-full sm:block sm:rounded-r-[36px]" style={{ backgroundColor: "rgb(231, 247, 223)" }}></div>
                        </div>

                    </div>

                </div>


                {/* <div class="sticky top-[105px] md:top-[190px]" style={{ transformStyle: "preserve-3d" }}>
                    <div class="featuresCard mb-[32px] flex w-full flex-col md:flex-row">

                        <div class="w-full rounded-t-[10px] p-5 md:rounded-l-[36px] md:rounded-tr-[0px] xl4:h-[507px]" >
                            <div class="flex h-full sm:items-center">
                                <div class="px-5 py-6 md:px-[38px]"><div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 50 50" class="text-[50px]"><rect width="50" height="50" fill="#9CE56D" opacity="0.3" rx="25"></rect><rect width="40" height="40" x="5" y="5" fill="#9CE56D" rx="20"></rect><path stroke="#102713" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m30.93 29.426.357 2.897c.091.76-.725 1.292-1.375.898L26.07 30.94q-.633 0-1.238-.083a4.46 4.46 0 0 0 1.082-2.897c0-2.603-2.255-4.711-5.042-4.711a5.2 5.2 0 0 0-2.86.834 6 6 0 0 1-.036-.697c0-4.17 3.62-7.553 8.094-7.553s8.094 3.383 8.094 7.553c0 2.475-1.274 4.666-3.236 6.041"></path><path stroke="#102713" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M25.915 27.958c0 1.09-.403 2.099-1.081 2.896-.908 1.1-2.347 1.806-3.96 1.806l-2.393 1.421c-.403.247-.917-.092-.862-.56l.23-1.805c-1.229-.852-2.017-2.218-2.017-3.758 0-1.614.862-3.034 2.182-3.878a5.2 5.2 0 0 1 2.86-.834c2.786 0 5.041 2.108 5.041 4.712"></path>
                                    </svg>
                                </div>
                                    <h2 class="mt-5 font-SpaceGrotesk text-[24px] font-bold tracking-[-0.25px] text-active md:text-[30px]">Human-like interviews</h2>
                                    <p class="mt-2.5 font-SpaceGrotesk text-sm font-normal tracking-[-0.5px] text-primary2 sm:mt-4 md:text-[18px]/[22px]">90% of existing AI interviewers are robotic making the process disrespectful and intimidating.</p>
                                </div>
                            </div>
                        </div>
                        <div class="relative w-full">
                            <div class="flex-center sm:[450px] relative z-10 w-full rounded-b-[10px] p-5 md:rounded-[36px] xl4:h-[507px]" style={{ backgroundColor: "rgb(215, 245, 198)" }}>

                                <Image src={'https://screener.hyring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHumanLikeImage.bc91b7de.png&w=1080&q=100'} alt='human-like-interview' width={532} height={373} className='hidden md:block' />
                                <Image src={'https://screener.hyring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHumanLikeImage.bc91b7de.png&w=1080&q=100'} alt='human-like-interview' width={332} height={240} className='md:hidden' />

                            </div>

                            <div class="absolute left-0 top-0 z-0 hidden h-full w-full sm:block sm:rounded-r-[36px]" style={{ backgroundColor: "rgb(231, 247, 223)" }}></div>
                        </div>

                    </div>

                </div> */}

            </div>
        </div>

    )
}

export default Unique
