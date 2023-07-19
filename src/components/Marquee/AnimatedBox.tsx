'use client'

import { styled } from '@mui/material'

export const AnimatedBox = styled('div')(() => ({
  '@keyframes animatedBox': {
    from: {
      transform: 'translateX(-33.33%)'
    },
    to: {
      transform: 'translateX(-66.66%)'
    }
  },
  animation: 'animatedBox 20s infinite linear',
  animationDirection: 'linear',
  position: 'absolute'
}))

export const AnimatedBox2 = styled('div')(() => ({
  '@keyframes animatedBox2': {
    from: {
      transform: 'translateY(-25%)'
    },
    to: {
      transform: 'translateY(-50%)'
    }
  },
  animation: 'animatedBox2 10s infinite linear',
  animationDirection: 'inherit',
  position: 'absolute'
}))
