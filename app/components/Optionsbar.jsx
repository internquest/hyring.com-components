'use client'
import React, { act, useEffect, useRef, useState } from 'react'
import Textbar from './Textbar'

const Optionsbar = ({ selected, setSelected, options }) => {

    const intervalRef = useRef(null)


    const startTimer = () => {
        // Clear any existing interval
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        // setSelected(1)
        intervalRef.current = setInterval(() => {
            setSelected(prev => {
                if (prev === options.length) {
                    return 1
                } else {
                    return prev + 1
                }
            })
        }, 8000)
    };


    useEffect(() => {
        startTimer()

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }
    }, [])

    const handletextbarclick = (current) => {
        setSelected(current)
        startTimer()
        // console.log(current);

    }
    return (
        <div class="flex w-full justify-around gap-5 overflow-x-auto xl:overflow-x-hidden">
            {/* <Textbar /> */}
            {options.map((option, index) => (
                <Textbar key={index} indexed={index} selected={selected} text={option.title} handletextbarclick={handletextbarclick} svg={option.svg} activesvg={option.activesvg} />
            ))}
        </div>
    )
}

export default Optionsbar
