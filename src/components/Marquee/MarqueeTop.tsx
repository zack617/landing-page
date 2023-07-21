'use client'
import { Box } from '@mui/material'
// @ts-ignore
import marquee_url from '@/assets/svg/marquee_top.svg?url'
import marquee_mobile_url from '@/assets/svg/marquee_top_mobile.svg?url'
import Image from 'next/image'
import { AnimatedBox } from './AnimatedBox'
import useBreakpoint from '@/hooks/useBreakpoints'
import { HideOnMobile, ShowOnMobile } from '@/theme'

export default function MarqueeTop() {
  const isDownMd = useBreakpoint('md')
  return (
    <Box
      sx={{
        border: '1px solid #000000',
        borderRadius: { xs: 0.9, md: 1.5 },
        background: (theme) => theme.palette.background.paper,
        py: { xs: 18, md: 30 },
        width: '100%',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <ShowOnMobile>
        <AnimatedBox sx={{ top: '6px', left: 0 }}>
          <Box display="flex" sx={{ '& *': { marginLeft: 20 } }}>
            {Array.from(Array(6).keys()).map((_, idx) => (
              <Image src={marquee_mobile_url} alt="" key={idx} />
            ))}
          </Box>
        </AnimatedBox>
      </ShowOnMobile>
      <HideOnMobile>
        <AnimatedBox sx={{ top: '6px', left: 0 }}>
          <Box display="flex" sx={{ '& *': { marginLeft: 20 } }}>
            {Array.from(Array(6).keys()).map((_, idx) => (
              <Image src={marquee_url} alt="" key={idx} />
            ))}
          </Box>
        </AnimatedBox>
      </HideOnMobile>
    </Box>
  )
}
