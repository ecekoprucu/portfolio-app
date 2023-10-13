/* eslint-disable react/no-unescaped-entities */
import React from "react";
import AnimateInOut from "../animations/AnimateInOut";

const About = () => {
   return (
        <AnimateInOut
            durationIn={1.5}
            durationOut={1.5}
            delay={0.5}
            delayOut={0}
            from={{ opacity: 0 as unknown as string }}
            set={{ opacity: 0 as unknown as string }}
            to={{ opacity: 1 as unknown as string }}>
            <div className="h-screen flex flex-col items-center justify-center p-80">
                <h1 className="text-4xl">About</h1>
                <p>
                I specialize in creating web and mobile applications. I've collaborated with both new startups and larger established companies, contributing to many successful projects.
                <br />
                <br />
                My skills include:
                <br />
                <b>JavaScript:</b> The backbone of my development process, allowing for interactive and dynamic applications.
                <br />
                <b>ReactJS & React Native:</b> My go-to libraries for building scalable and efficient web and mobile applications. I've successfully delivered projects that cater to diverse user needs using these tools.
                <br />
                <b>Redux and Context API:</b> Techniques I use for managing the app's operations.
                <br />
                <b>REST API and GraphQL:</b> Methods I employ for handling data in apps.
                <br />
                <b>TypeScript:</b> Enhancing code quality and understandability, TypeScript has been instrumental in ensuring type safety in my projects.

                I am fluent in both English and Turkish, enabling effective communication in diverse settings.


                </p>
            </div>
        </AnimateInOut>
   )
}

export default About;