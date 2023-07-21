'use client'
// @ts-ignore
import barcodeUrl from '@/assets/svg/barcode.svg?.url'
// @ts-ignore
import potUrl from '@/assets/svg/pot.svg?.url'
import { Box, styled } from '@mui/material'
import Img from '../Image/image'

export const AnimatedPot = styled(Img)(({ theme }) => ({
  height: 'auto',
  '@keyframes animatedPot': {
    from: {
      transform: 'translateX(0%) '
    },
    to: {
      transform: 'translateX(200%) '
    }
  },
  animation: 'animatedPot 5s infinite linear',
  animationDirection: 'alternate',
  width: '33%'
}))

export default function Pot() {
  return (
    <Box>
      <Box
        display="grid"
        gridTemplateColumns={'1fr auto 1fr'}
        justifyItems={'left'}
        alignItems={'center'}
        width="100%"
        height={{ xs: 65, md: 130 }}
        sx={{ '& img': { maxWidth: '100%' } }}
      >
        <Img src={barcodeUrl} alt="" />
        <Box
          height={{ xs: 65, md: 130 }}
          display={'flex'}
          alignItems={'center'}
          sx={{
            width: { xs: 200, sm: 350, md: 600 },
            top: 0,
            position: 'relative',
            margin: '0 20px'
          }}
        >
          <AnimatedPot src={potUrl} alt="" />
        </Box>
        <Img src={barcodeUrl} alt="" sx={{ justifySelf: 'right' }} />
      </Box>
    </Box>
  )
}
