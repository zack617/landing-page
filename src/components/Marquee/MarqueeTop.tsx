'use client'
import { Box } from '@mui/material'
// @ts-ignore
import marquee_url from '@/assets/svg/marquee_top.svg?url'
import Image from 'next/image'
import { AnimatedBox } from './AnimatedBox'

export default function MarqueeTop() {
  return (
    <Box
      sx={{
        border: '1px solid #000000',
        borderRadius: 1.5,
        background: (theme) => theme.palette.background.paper,
        py: 30,
        width: '100%',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <AnimatedBox sx={{ top: '6px', left: 0 }}>
        <Box display="flex" sx={{ '& *': { marginLeft: 20 } }}>
          <Image src={marquee_url} alt="" />
          <Image src={marquee_url} alt="" />
          <Image src={marquee_url} alt="" />
          <Image src={marquee_url} alt="" />
          <Image src={marquee_url} alt="" />
          <Image src={marquee_url} alt="" />
        </Box>
      </AnimatedBox>
    </Box>
  )
}
