"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { TextSplitter } from './textSpliter';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(useGSAP, ScrollTrigger)


const Banner = () => {

    useGSAP(() => {
        const introTl = gsap.timeline()

        introTl.from('.split-char', {
            y: -100,
            opacity: 0,
            stagger: 0.1,
            delay: 1
        }, 0)
            .from('.banner-logo', {
                opacity: 0,
                scale: 0.1,
                delay: 1

            }, 0)
            .from('.banner-button', {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: 'back.inOut(3)',
                delay: 1

            }, 0)
            .from('.banner-video', {
                scale: .001,
                duration: 1.5,
                delay: 0.5,
                borderRadius: '50%'


            }, 0)



        const scrollTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.banner',
                start: 'top top',
                end: 'bottom +100',
                scrub: 1.1,
                markers: false
            }

        })

        scrollTl
            .to('.banner-logo', {
                gap: '200px',
                scale: 2,
                y: 200,
            })
            .to('.banner-video', {
                borderRadius: '50%',
            }, 0).to('.banner-video', {
                y: -500,
            }, .2)
            .to('.banner-logo', {
                opacity: 0
            }, .35)


    })
    return (
        <section className='banner flex flex-col h-[90vh] justify-center items-center  mt-5 overflow-hidden w-full'>
            <div className='banner-logo z-10 flex justify-center items-center w-full gap-10'>
                <p className='flex'>
                    <TextSplitter
                        wordDisplayStyle='block'
                        text='By Mahra M1'
                        className='hero-header-word'
                    />
                </p>
                <Image className='banner-logo' src='/puma.png' alt="puma" width={96} height={96} />
                <button className='banner-button'>Shop Now</button>
            </div>
            <div className='h-[80vh]  m-auto'>
                <video className='banner-video w-screen' autoPlay loop muted >
                    <source src="/mahraBanner.mp4" type="video/mp4" />
                </video>
            </div>
        </section>
    )
}

export default Banner