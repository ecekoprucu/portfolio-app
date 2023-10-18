"use client"

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Link from 'next/link';

function ScrollSection() {

    const sectionRef = useRef<HTMLDivElement>(null!);

    useEffect(() => {
          gsap.registerPlugin(ScrollTrigger);
          const panels = gsap.utils.toArray(".scroll-section");

          const pin = gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            smoothOrigin: true,
            scrollTrigger: {
              start: "top top",
              trigger: '.trigger',
              pin: true,
              scrub: 1,
              snap: 1 / (panels.length - 1),
              end: () =>  "+=" + (sectionRef.current.offsetWidth - innerWidth)
            }
          });

          return () => {
            pin.kill();
          };

      }, []);

    return (
        <section className='overflow-hidden'>
            <div className='trigger'>
                <div ref={sectionRef} className='scroll-section-inner'>
                    <div className='scroll-section salmon'>
                        <Link href='/'>Home</Link>
                    </div>
                    <div className='scroll-section light-green'>
                        <Link href='/about'>About</Link>
                    </div>
                    <div className='scroll-section light-purple'>
                        <Link href='/ece-koprucu_cv.pdf' download="cv">CV</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ScrollSection