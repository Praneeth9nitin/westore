"use client"

import React from 'react'
import {useLottie} from "lottie-react"

export function Lottie() {
    const view = useLottie({
        animationData: require('../assets/animation.json'),
        loop: true,
        autoplay: true,
    })
  return (
    <div className='w-96'>
      {view.View}
    </div>
  )
}

export function Lottie2() {
    const view = useLottie({
        animationData: require('../assets/circle-loader.json'),
        loop: true,
        autoplay: true,
    })
  return (
    <div className='w-11'>
      {view.View}
    </div>
  )
}