"use client"

import React, { useState } from 'react';
import gsap from 'gsap';

type Props = {
    children: React.ReactNode;
}

type ContextProps = {
    timeline: gsap.core.Timeline;
    setTimeline: React.Dispatch<React.SetStateAction<gsap.core.Timeline>>;
}

export const TransitionContext = React.createContext<ContextProps>({
    timeline: gsap.timeline({ paused: true }),
    setTimeline: function (value: React.SetStateAction<gsap.core.Timeline>): void {
        throw new Error('Function not implemented.');
    }
});

export const TransitionProvider = ({children}: Props) => { 
    const [timeline, setTimeline] = useState(() =>  gsap.timeline({ paused: true }));
   
    return (
        <TransitionContext.Provider value={{timeline, setTimeline}}>
            {children}
        </TransitionContext.Provider>
    )
}