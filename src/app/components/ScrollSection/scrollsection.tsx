"use client"

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Link from 'next/link';

function ScrollSection() {

    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const pin = gsap.fromTo(
          sectionRef.current,
          {
            translateX: 0,
          },
          {
            translateX: "-100vw",
            ease: "none",
            duration: 2,
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top top",
              end: "2000 top",
              scrub: 0.6,
              pin: true,
            },
          }
        );
        return () => {
          pin.kill();
        };
      }, []);

    return (
        <section className='overflow-hidden'>
            <div ref={triggerRef}>
                <div ref={sectionRef} className='scroll-section-inner'>
                  <div className='scroll-section' />
                    <div className='scroll-section'>
                        <Link href='/'>Home</Link>
                    </div>
                    <div className='scroll-section'>
                        <Link href='/about'>About</Link>
                    </div>
                    <div className='scroll-section'>
                        <Link href='/'>CV</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ScrollSection