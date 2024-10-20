'use client'
import React, { useState } from 'react'
import Optionsbar from './Optionsbar'
import Optionbarcard from './Optionbarcard'

const Options = () => {


    const [selected, setSelected] = useState(1)
    const options = [
        {
            id: 1,
            title: "Video Interviews",
            svg: () =>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 26 26"><path stroke="#6F7D71" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.943" d="M13.572 22.122H6.725c-3.423 0-4.56-2.275-4.56-4.56V8.44c0-3.424 1.137-4.561 4.56-4.561h6.847c3.423 0 4.56 1.137 4.56 4.56v9.122c0 3.424-1.148 4.561-4.56 4.561M21.148 18.525l-3.011-2.112V9.577l3.011-2.113c1.474-1.029 2.687-.4 2.687 1.409v8.255c0 1.809-1.213 2.437-2.687 1.397"></path><path stroke="#6F7D71" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.943" d="M12.46 11.917a1.625 1.625 0 1 0 .001-3.25 1.625 1.625 0 0 0 0 3.25"></path>
                </svg>,
            activesvg: () => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 26 26">
                <path fill="#102713" d="M22.915 6.684c-.444-.238-1.376-.488-2.643.4l-1.593 1.127c-.119-3.369-1.581-4.69-5.135-4.69h-6.5c-3.705 0-5.146 1.44-5.146 5.145v8.667c0 2.492 1.355 5.146 5.146 5.146h6.5c3.554 0 5.016-1.322 5.135-4.691l1.593 1.127c.671.476 1.256.628 1.722.628.401 0 .715-.12.921-.227.444-.228 1.192-.845 1.192-2.395V9.078c0-1.55-.748-2.167-1.192-2.394M11.92 12.328a2.04 2.04 0 0 1-2.036-2.037c0-1.126.92-2.036 2.036-2.036s2.037.91 2.037 2.036c0 1.127-.92 2.037-2.037 2.037"></path>
            </svg>,
            left: {
                title: 'Resource-Intensive Process',
                desc: 'Conduct extensive interviews with thousands of phone interviews, numerous in-person interviews, and multiple tests.',
                img: ''
            },
            right: {
                title: 'Efficient Video Evaluation',
                desc: 'Provides recorded video responses and transcripts with insights on candidate confidence, technical capabilities, and soft skills.',
                img: ''
            }
        },
        {
            id: 2,
            title: "Detailed Score Report",
            svg: () =>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 26 26"><path stroke="#6F7D71" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.943" d="M8.664 2.166v3.25M17.332 2.166v3.25M22.746 9.208v9.208c0 3.25-1.625 5.417-5.417 5.417H8.663c-3.792 0-5.417-2.167-5.417-5.417V9.208c0-3.25 1.625-5.417 5.417-5.417h8.666c3.792 0 5.417 2.167 5.417 5.417M8.664 11.917h8.667M8.664 17.334h4.333"></path>
                </svg>,
            activesvg: () =>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 26 26"><path fill="#102713" d="M9.477 3.792V2.167a.82.82 0 0 0-.813-.813.82.82 0 0 0-.812.813v1.69c.27-.033.52-.065.812-.065zM18.145 3.857v-1.69a.82.82 0 0 0-.813-.813.82.82 0 0 0-.812.813v1.625h.812c.293 0 .542.032.813.065"></path><path fill="#102713" d="M18.146 3.857v1.56a.82.82 0 0 1-.813.812.82.82 0 0 1-.812-.812V3.792H9.479v1.625a.82.82 0 0 1-.812.812.82.82 0 0 1-.813-.812v-1.56c-3.196.292-4.604 2.35-4.604 5.352v9.208c0 3.25 1.625 5.417 5.417 5.417h8.666c3.792 0 5.417-2.167 5.417-5.417V9.209c0-3.001-1.408-5.06-4.604-5.352M13 18.147H8.667a.82.82 0 0 1-.813-.813c0-.444.369-.813.813-.813H13c.444 0 .813.369.813.813a.82.82 0 0 1-.813.812m4.333-5.417H8.667a.82.82 0 0 1-.813-.813c0-.444.369-.812.813-.812h8.666c.445 0 .813.368.813.812a.82.82 0 0 1-.813.813"></path>
                </svg>,
            left: {
                title: 'Limited Feedback',
                desc: 'Candidates received basic feedback like good, bad, rejected, or selected without detailed data.',
                img: ''
            },
            right: {
                title: 'Detailed, Actionable Insights',
                desc: 'Each interview includes detailed rankings, scores, and video recordings with transcripts for better decision-making.',
                img: ''
            }
        },
        {
            id: 3,
            title: "HR Man-hours saved",
            svg: () =>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 26 26"><path stroke="#6F7D71" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.943" d="M23.83 13c0 5.98-4.853 10.833-10.833 10.833S2.164 18.979 2.164 12.999 7.017 2.166 12.997 2.166s10.834 4.853 10.834 10.833"></path><path stroke="#6F7D71" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.943" d="m17.022 16.445-3.359-2.004c-.585-.347-1.061-1.181-1.061-1.864V8.136"></path>
                </svg>,
            activesvg: () =>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 16 16"><path fill="#102713" d="M8 1.332c-3.673 0-6.666 2.993-6.666 6.667s2.993 6.666 6.667 6.666S14.667 11.672 14.667 8s-2.993-6.667-6.666-6.667m2.9 9.047a.497.497 0 0 1-.686.173L8.147 9.319c-.513-.307-.893-.98-.893-1.574V5.012c0-.273.227-.5.5-.5s.5.227.5.5v2.733c0 .24.2.594.407.714l2.066 1.233c.24.14.32.447.174.687"></path>
                </svg>,
            left: {
                title: 'Limited Feedback',
                desc: 'Candidates received basic feedback like good, bad, rejected, or selected without detailed data.',
                img: ''
            },
            right: {
                title: 'Detailed, Actionable Insights',
                desc: 'Each interview includes detailed rankings, scores, and video recordings with transcripts for better decision-making.',
                img: ''
            }
        },
        {
            id: 4,
            title: "Cost",
            svg: () =>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 26 26"><path stroke="#6F7D71" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.943" d="M9.395 15.524c0 1.397 1.072 2.524 2.405 2.524h2.719c1.159 0 2.101-.986 2.101-2.2 0-1.321-.574-1.787-1.43-2.09l-4.365-1.517c-.856-.303-1.43-.769-1.43-2.09 0-1.214.942-2.2 2.101-2.2h2.72c1.332 0 2.404 1.127 2.404 2.524M13 6.5v13"></path><path stroke="#6F7D71" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.943" d="M12.997 23.833c5.983 0 10.834-4.85 10.834-10.834 0-5.983-4.85-10.833-10.834-10.833-5.983 0-10.833 4.85-10.833 10.833s4.85 10.834 10.833 10.834"></path>
                </svg>,
            activesvg: () =>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 26 26"><path fill="#102713" d="M13.809 17.247h.704c.704 0 1.289-.629 1.289-1.387 0-.942-.336-1.127-.888-1.322l-1.095-.379v3.088z"></path><path fill="#102713" d="M12.965 2.059c-5.98.021-10.823 4.885-10.8 10.865.02 5.98 4.885 10.823 10.865 10.801 5.98-.021 10.823-4.886 10.8-10.866-.02-5.98-4.885-10.811-10.865-10.8M15.445 13c.846.293 1.983.921 1.983 2.86 0 1.669-1.31 3.012-2.914 3.012h-.704v.628a.82.82 0 0 1-.812.813.82.82 0 0 1-.813-.813v-.628h-.39c-1.777 0-3.218-1.495-3.218-3.337 0-.444.369-.812.813-.812s.813.368.813.812c0 .943.715 1.712 1.592 1.712h.39v-3.662L10.549 13c-.845-.292-1.982-.92-1.982-2.86 0-1.668 1.31-3.011 2.914-3.011h.704V6.5c0-.444.368-.812.813-.812s.812.368.812.812v.629h.39c1.777 0 3.218 1.495 3.218 3.336a.82.82 0 0 1-.813.813.82.82 0 0 1-.812-.813c0-.942-.715-1.711-1.593-1.711h-.39v3.661z"></path><path fill="#102713" d="M10.203 10.15c0 .943.336 1.127.889 1.322l1.094.38v-3.1h-.704c-.705 0-1.279.63-1.279 1.398"></path>
                </svg>,
            left: {
                title: 'Limited Feedback',
                desc: 'Candidates received basic feedback like good, bad, rejected, or selected without detailed data.',
                img: ''
            },
            right: {
                title: 'Detailed, Actionable Insights',
                desc: 'Each interview includes detailed rankings, scores, and video recordings with transcripts for better decision-making.',
                img: ''
            }
        }
    ]



    // console.log(options[selected - 1])

    return (
        <>
            <div class="relative mb-[60px] mt-[40px] hidden w-full md:block">


                <Optionsbar selected={selected} setSelected={setSelected} options={options} />



            </div>
            <div class="grid gap-5 md:grid-cols-2 lg:gap-[48px]">
                <Optionbarcard key={'1'} details={options[selected - 1].left} bgcolor={'#e7e9e7'} />
                <Optionbarcard key={'2'} details={options[selected - 1].right} bgcolor={'#d7f5c5'} />

            </div>
        </>
    )
}

export default Options
