"use client";

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

function Rectangle() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const triangleTopEffect = gsap.to('.triangle-top', {
            '--after-top': '-150%',
            '--after-right': '150%',
            scrollTrigger: {
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        });

        const triangleBottomEffect = gsap.to('.triangle-bottom', {
            '--before-top': '200%',
            '--before-left': '200%',
            scrollTrigger: {
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        });

        return () => {
            triangleTopEffect.kill();
            triangleBottomEffect.kill();
        }

    }, []);

    return (
        <>
            <div className='rectangle'>
                <div className='triangle triangle-top h-2/6 w-screen'/>
                <div className='triangle triangle-bottom h-2/6 w-screen'/>
            </div>
        </>
    );
}

export default Rectangle;