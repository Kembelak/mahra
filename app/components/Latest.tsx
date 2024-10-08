'use client'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)



const Latest = () => {

  useGSAP(() => {
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.img-box',
        start: 'top top',
        end: '600 center',
        scrub: 1.1,
        markers: false
      }
    })
    scrollTl.from('.img', { opacity: 0 })


  })
  return (
    <section className='bg-black img-box'>
      <Image className='img' alt='lol' src='/mahraFooter.png' width={0} height={0} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} sizes="100vw" />
    </section>
  )
}

export default Latest