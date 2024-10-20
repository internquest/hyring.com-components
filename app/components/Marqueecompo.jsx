import React from 'react'

const Marqueecompo = () => {
    return (
        <div class="flex items-center relative h-full w-full flex-col self-stretch overflow-hidden">
            <div class="mb-[8px] hidden md:block">
                <div class="marquee-container !w-[1280px]" >
                    <div className="absolute w-full h-full before:top-0 before:left-0 before:bg-gradient-to-r before:from-[#f8f8f8] before:to-white/[0] before:content-[''] before:h-full before:absolute before:w-[30px] before:z-[2] before:pointer-events-none after:top-0 after:right-0 after:rotate-180 after:bg-gradient-to-r after:from-[#f8f8f8] after:to-white/[0] after:content-[''] after:h-full after:absolute after:w-[30px] after:z-[2] after:pointer-events-none">

                    </div>
                    <div class="marquee" >
                        <div className="flex-grow-0 flex-shrink-0 basis-auto flex items-center ">
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="marquee" >
                        <div className="flex-grow-0 flex-shrink-0 basis-auto flex items-center ">
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="mb-[8px] hidden md:block">
                <div class="marquee-container !w-[1280px]" >
                    <div className="absolute w-full h-full before:top-0 before:left-0 before:bg-gradient-to-r before:from-[#f8f8f8] before:to-white/[0] before:content-[''] before:h-full before:absolute before:w-[30px] before:z-[2] before:pointer-events-none after:top-0 after:right-0 after:rotate-180 after:bg-gradient-to-r after:from-[#f8f8f8] after:to-white/[0] after:content-[''] after:h-full after:absolute after:w-[30px] after:z-[2] after:pointer-events-none">

                    </div>
                    <div class="marquee [animation-direction:reverse]" >
                        <div className="flex-grow-0 flex-shrink-0 basis-auto flex items-center ">
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="marquee [animation-direction:reverse]" >
                        <div className="flex-grow-0 flex-shrink-0 basis-auto flex items-center ">
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="mb-[8px] hidden md:block">
                <div class="marquee-container !w-[1280px]" >
                    <div className="absolute w-full h-full before:top-0 before:left-0 before:bg-gradient-to-r before:from-[#f8f8f8] before:to-white/[0] before:content-[''] before:h-full before:absolute before:w-[30px] before:z-[2] before:pointer-events-none after:top-0 after:right-0 after:rotate-180 after:bg-gradient-to-r after:from-[#f8f8f8] after:to-white/[0] after:content-[''] after:h-full after:absolute after:w-[30px] after:z-[2] after:pointer-events-none">

                    </div>
                    <div class="marquee" >
                        <div className="flex-grow-0 flex-shrink-0 basis-auto flex items-center ">
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="marquee" >
                        <div className="flex-grow-0 flex-shrink-0 basis-auto flex items-center ">
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div >
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white"><div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">conversational</div></div>
                            </div>
                            <div>
                                <div class="flex-center ml-[8px] h-[52px] gap-[10px] whitespace-nowrap rounded-[6px] border border-[#CFD4D0] px-[14px] last:bg-white">
                                    <div class="whitespace-nowrap font-SpaceGrotesk text-sm uppercase tracking-[1px] text-secondary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3597 7 20.5597V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z" fill="#53B43B"></path><path d="M11.9998 12.1094C11.5898 12.1094 11.2498 11.7694 11.2498 11.3594V11.1494C11.2498 9.98941 12.0998 9.4194 12.4198 9.1994C12.7898 8.9494 12.9098 8.77941 12.9098 8.51941C12.9098 8.01941 12.4998 7.60938 11.9998 7.60938C11.4998 7.60938 11.0898 8.01941 11.0898 8.51941C11.0898 8.92941 10.7498 9.26941 10.3398 9.26941C9.92984 9.26941 9.58984 8.92941 9.58984 8.51941C9.58984 7.18941 10.6698 6.10938 11.9998 6.10938C13.3298 6.10938 14.4098 7.18941 14.4098 8.51941C14.4098 9.65941 13.5698 10.2294 13.2598 10.4394C12.8698 10.6994 12.7498 10.8694 12.7498 11.1494V11.3594C12.7498 11.7794 12.4098 12.1094 11.9998 12.1094Z" fill="#53B43B"></path><path d="M12 14.6016C11.58 14.6016 11.25 14.2616 11.25 13.8516C11.25 13.4416 11.59 13.1016 12 13.1016C12.41 13.1016 12.75 13.4416 12.75 13.8516C12.75 14.2616 12.42 14.6016 12 14.6016Z" fill="#53B43B"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="flex-center justify-center left-2/4 top-2/4 z-[10] h-full flex-col md:absolute md:-translate-x-2/4 md:-translate-y-2/4 md:px-10">
                <p class="whitespace-nowrap text-center font-SpaceGrotesk text-[34px]/[40px] font-bold tracking-[-0.5px] text-secondary md:text-[50px]/[56px]">What sets us apart</p>
                <p class="text-center font-SpaceGrotesk text-[34px]/[40px] font-bold tracking-[-0.5px] text-secondary md:text-[50px]/[56px]">from competition</p>
            </div>
            <div class="absolute left-0 top-0 z-[2] hidden h-full w-full grid-cols-2 md:grid">
                <div style={{ backgroundImage: "linear-gradient(270deg, rgb(248, 248, 248) 20%, transparent)" }}></div>
                <div style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 248, 248) 20%, transparent)" }}></div>
            </div>


        </div>
    )
}

export default Marqueecompo
