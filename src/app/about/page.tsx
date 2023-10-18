"use client"

/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import AnimateInOut from "../animations/AnimateInOut";
import Link from "next/link";

const About = () => {

    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    const text = 'About Me';

    useEffect(() => {
        if (currentIndex < text.length) {
          const timeout = setTimeout(() => {
            setCurrentText(prevText => prevText + text[currentIndex]);
            setCurrentIndex(prevIndex => prevIndex + 1);
          }, 100);
      
          return () => clearTimeout(timeout);
        }
      }, [currentIndex]);

   return (
    <div className="h-screen flex flex-col items-center justify-center p-80">
         <h1 className="text-4xl">{currentText}</h1>
         <br />
        <AnimateInOut
            durationIn={3}
            durationOut={3}
            delay={1}
            from={{ opacity: 0 as unknown as string }}
            set={{ opacity: 0 as unknown as string }}
            to={{ opacity: 1 as unknown as string }}>
                <p>
                I specialize in creating web and mobile applications. I've collaborated with both new startups and larger established companies, contributing to many successful projects.
                <br />
                <br />
                My skills include:
                <br />
                JavaScript: The backbone of my development process, allowing for interactive and dynamic applications.
                <br />
                ReactJS & React Native: My go-to libraries for building scalable and efficient web and mobile applications. I've successfully delivered projects that cater to diverse user needs using these tools.
                <br />
                Redux and Context API: Techniques I use for managing the app's operations.
                <br />
                REST API and GraphQL: Methods I employ for handling data in apps.
                <br />
                TypeScript: Enhancing code quality and understandability, TypeScript has been instrumental in ensuring type safety in my projects.
                <br />
                <br />
                I am fluent in both English and Turkish, enabling effective communication in diverse settings.
                </p>
        </AnimateInOut>
            <br />
        <Link href='/'>Back</Link>
    </div>

   )
}

export default About;