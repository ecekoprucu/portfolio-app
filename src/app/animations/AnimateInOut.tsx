"use client"

import React, { useRef, useContext, useLayoutEffect } from "react"
import gsap from "gsap"
import { TransitionContext } from "../transitionContext"

type Props = {
    children: React.ReactNode;
    durationIn: number;
    durationOut: number;
    delay?: number;
    delayOut?: number;
    set?: gsap.GSAPUnits;
    from?: gsap.GSAPUnits;
    to?: gsap.GSAPUnits;
}

const AnimateInOut = ({
  children,
  durationIn,
  durationOut,
  delay,
  delayOut,
  set,
  from,
  to
}: Props) => {
  const { timeline } = useContext(TransitionContext);
  const el = useRef(null)

  useLayoutEffect(() => {
    if (set) {
      gsap.set(el.current, { ...set })
    }

    gsap.to(el.current, {
      ...to,
      delay: delay || 0,
      duration: durationIn,
    })

      timeline.add(
        gsap.to(el.current, {
          ...from,
          delay: delayOut || 0,
          duration: durationOut,
        }),
        0
      )
  }, [delay, delayOut, durationIn, durationOut, from, set, timeline, to]);

  return (
    <div ref={el}>
      {children}
    </div>
  )
}

export default AnimateInOut