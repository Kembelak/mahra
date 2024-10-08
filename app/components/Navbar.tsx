'use client'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"


gsap.registerPlugin(useGSAP)

const Navbar = () => {



    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from('.Logo', {
            opacity: 0,
            duration: 1.5,
            y: -100,
            delay: 1

        }, 0)
            .from('.navItem', {
                opacity: 0,
                duration: 1.5,
                y: -100,
                stagger: 0.2,
                ease: 'back.in(.5)',
                delay: 1

            }, 0)
    })



    return (
        <div className="flex justify-evenly items-center  m-auto h-[10vh] px-10 border-b-2 border-solid">
            <div>
                <Image className="Logo" src='/Logo.png' alt="mahra" width={96} height={96} />
            </div>
            <div className="flex gap-4">
                <h2 className="navItem">Instagram</h2>
                <h2 className="navItem">LOGO</h2>
                <h2 className="navItem">|</h2>
                <h2 className="navItem">UAE</h2>
            </div>
        </div>
    )
}

export default Navbar