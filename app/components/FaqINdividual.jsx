'use client'
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'




const FaqINdividual = ({ question, solution, indexed }) => {
    const faqanser = ['All-inclusive package', 'Save up to 50% of resource cost', 'Complete transparency on salary to candidates', 'Recruit Top 5% of Indian IT talent', 'Flexibility on contract (Min. 4 months)', 'Recognised as employee of the your company in Linkedin', 'Commitment to a Single Client Focus', 'Cool Offices Located Across India']
    // const [expanded, setExpanded] = useState<string | false>(false);

    // const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: Boolean) => {
    //     // console.log(isExpanded, panel, identity);

    //     setExpanded(isExpanded ? panel : false);
    // };
    const [open, setOpen] = useState(false)
    const [heihgtvalue, setHeightValue] = useState(0)

    const solref = useRef(null)
    const handleClick = () => {

        setOpen(!open)
        // console.log(solref.current);
        // console.log(open);

        if (solref.current) {
            solref.current.style.transitionDuration = '500ms';
            solref.current.style.height = !open
                ? `${solref.current.scrollHeight}px`
                : '0px';
        }
    }
    // useEffect(() => {
    //     // if (solref.current) {
    //     //     solref.current.style.height = open
    //     //         ? `${solref.current.scrollHeight}px`
    //     //         : '0px';
    //     // }
    // }, [])
    // useEffect(() => {
    //     if (open) {
    //         if (solref.current) {
    //             // console.log(solref.current.getBoundingClientRect());

    //             const height = solref.current.getBoundingClientRect().height
    //             console.log(height);
    //             setHeightValue(height)

    //         }

    //     }
    // }, [open])
    // console.log(open);

    return (
        <>
            <motion.button onClick={() => handleClick()} type="button" class="!border-[#0e0f0c2e] rounded-[10px] border">
                <div class={` ${open && 'bg-[rgb(237,239,236)]'}  box-border flex items-center md:text-[20px] md:pt-5 md:pr-5 md:pl-[30px] md:pb-5 text-[#0e0f0c] tracking-[-.5px] py-[22px] px-[1.25rem] rounded-tr-[10px] rounded-tl-[10px] gap-[1.25rem]   cursor-pointer font-semibold   leading-[24px]  justify-between`}>
                    <p class=" border-[solid] border-[#383838] box-border m-0 max-w-none ">{question}</p>

                    {
                        !open ?
                            <div class="flex items-center justify-center h-[35px] w-[35px] rounded bg-[#cfd4d0] md:h-[28px] md:w-[28px]">
                                <svg class="w-[1em] h-[1em] fill-current flex-shrink-0 text-[1.5rem] transition-[fill] duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)]" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AddIcon" style={{ color: 'rgb(16, 39, 19)' }}><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                            </div>
                            :
                            <div class="flex justify-center items-center  h-[35px] w-[35px] rounded bg-[#cfd4d0] md:h-[28px] md:w-[28px]">
                                <svg class="w-[1em] h-[1em] fill-current flex-shrink-0 text-[1.5rem] transition-[fill] duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)]" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RemoveIcon" style={{ color: 'rgb(16, 39, 19)' }}><path d="M19 13H5v-2h14v2z"></path></svg>
                            </div>
                    }
                </div>


                <div ref={solref} style={{ height: 0, overflow: 'hidden' }} class="   ">
                    <div className='box-border text-start overflow-hidden md:text-base/[21px] md:pt-[1.25rem] md:pr-[28px] md:pl-[30px] md:pb-[20px] text-[#454745] font-normal text-sm pt-2 pb-3 px-5 p-[8px_16px_16px] opacity-80 duration-500 [transition:height] ease-in-out' dangerouslySetInnerHTML={{ __html: solution }}>


                    </div>

                </div>



            </motion.button>






        </>
    )
}

export default FaqINdividual


// const FaqINdividual = ({ question, solution, identity }) => {
//     const [expanded, setExpanded] = useState(false);

//     const handleChange = (panel) => (event, isExpanded) => {
//         setExpanded(isExpanded ? panel : false);
//     };
//     return (
//         <>
//             <Accordion expanded={expanded === identity} onChange={handleChange(identity)} className='mb-5 !rounded-[10px] !border border-[#0e0f0c2e] bg-transparent !shadow-none '>
//                 <AccordionSummary

//                     className={`${expanded === identity && 'bg-[rgb(237,239,236)]'} md:text-[20px] !m-0 gap-5 rounded-t-[10px] !px-5 !pb-[22px] !pt-[22px] text-[16px]/[24px] font-semibold tracking-[-0.5px] text-active md:!pb-[20px] md:!pl-[30px] md:!pr-[28px] md:!pt-[20px] font-SpaceGrotesk  `}
//                     expandIcon={expanded === identity ? <Icon icon={<MinusIcon />} /> : <Icon icon={<PlusIcon />} />}
//                     aria-controls={`${identity}-content`}
//                     id={`${identity}-header`}
//                 >


//                     {question}

//                 </AccordionSummary>
//                 <AccordionDetails className=' !px-5 !pb-3 !pt-2 text-sm font-normal text-primary2 md:!pb-[20px] md:!pl-[30px] md:!pr-[28px] md:!pt-5 md:text-base/[21px]'>

//                     {solution}

//                 </AccordionDetails>
//             </Accordion>


//         </>
//     )
// }

// export default FaqINdividual
