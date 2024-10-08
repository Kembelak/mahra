'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'


gsap.registerPlugin(useGSAP,ScrollTrigger)

const Cards = () => {

    useGSAP(() => {
        const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.product',
                    start: 'top center',
                    end: '300 center',
                    scrub: 1.1,
                    markers: false
                }
            
        })
        tl.from('.product', {
            opacity: 0,
            stagger:.8
        })
    })

    return (
        <section className='products flex justify-evenly items-center p-4 bg-black pt-24'>
            <div className='product bg-black text-white text-center '>
                <Image src='/divorceSpry.jpg' alt="product" width={300} height={350} />
                <p className='m-2'>Hair & Body Spray</p>
                <p className='m-2'>AED 604.00</p>
            </div>
            <div className='product text-white text-center scale-125'>
                <Image src='/divorcePerf.jpg' alt="product" width={300} height={350} />
                <p className='m-2'>Divorce</p>
                <p className='m-2'>AED 1,000.00</p>
            </div>

            <div className='product bg-black text-white text-center'>
                <Image src='/divorcePowder.jpg' alt="product" width={300} height={350} />
                <p className='m-2'>Powder</p>
                <p className='m-2'>AED 716.00</p>
            </div>
        </section>
    )
}

export default Cards