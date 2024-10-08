'use client'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Futures = () => {

  useGSAP(() => {

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.futures',
        start: '-200 top',
        end: 'bottom center',
        scrub: 1.1,
        markers: false,
        pin: true
      }
    }
    )
    scrollTl
      .fromTo('.futures-img', {
        x: -700,
        borderRadius: '50%',
        scale: .5,
        opacity: 0.4
      }, {
        x: 0,
        borderRadius: 0,
        scale: 1,
        opacity: 1
      })
      .fromTo('.futures-box', {
        x: 700,
        borderRadius: '50%',
        scale: .5,
        opacity: 0
      }, {
        x: 0,
        borderRadius: 0,
        scale: 1,
        opacity: 1
      })
      .fromTo('.mahraPuma', {
        scaleY: .01,
        opacity: 0,
      }, {
        scaleY: 1,
        opacity: 1,

      }).to('.mahraPuma', { y: -1100 })
      .to('.futures-box', {
        opacity: 0
      }).to(' .futures-img', {
        x: 800,
        opacity: 0,
        scale: 2
      })
      .fromTo('.divorceImg', {
        x: 500,
        y: -100,
        opacity: 0
      }, {
        opacity: 1,
        x: 0,
        y: -500
      })
      .fromTo('.divorceBox', {
        x: -500,
        y: -900,
        opacity: 0
      }, {
        opacity: 1,
        x: 0,
        y: -500
      })

  })



  return (
    <section className="futures min-h-full">
      <div className="flex justify-center items-center gap-4 w-full h-[50vh] p-5 ">
        <div className="futures-img flex-1  h-full ">
          <Image className="futures-img" src='/mahra.png' alt="puma" width={0} height={0} style={{ width: '100%', height: '100%', objectFit: 'cover' }} sizes="100vw" />
        </div>
        <div className="futures-box flex-1 m-7 flex justify-center items-center flex-col text-center bg-gray-100 w-full h-full rounded-full">

          <Image src='/puma.png' alt="puma" width={96} height={96} />
          <p>
            Opulence Of Our Exclusive
          </p>
          <h3>
            Crafting the Apex of <br />
            <span>Opulence</span>
          </h3>

        </div>
      </div>
      <div className="relative">
        <div className="mahraPuma flex-1 m-7 absolute -top-[600px] opacity-0">
          <Image src='/mahraPuma.png' alt="puma" width={0} height={0} style={{ width: '100%', height: 'auto' }} sizes="100vw" />
        </div>

      </div>



      <div className="flex justify-center items-center  w-full h-[50vh]">
        <div className="divorceBox flex-1 m-7 flex h-full justify-center items-center flex-col text-center bg-gray-100 ">

          <Image src='/puma.png' alt="puma" width={96} height={96} />
          <p>
            Indulge In The Luxury Of Mahra M1
          </p>
          <h3>
            Creating The Quintessence Of <br />
            <span>Luxury</span>
          </h3>

        </div>
        <div className="divorceImg flex-1 m-7 h-fit w-screen">
          <Image src='/mahraDivorce.jpg' alt="puma" width={0} height={0} style={{ width: '100vw', height: '100%', objectFit: 'cover' }} sizes="100vw" />
        </div>
      </div>
    </section>
  )
}

export default Futures