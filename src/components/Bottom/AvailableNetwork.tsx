import { Box, Typography } from '@mui/material'
import { AnimatedBox2 } from '../Marquee/AnimatedBox'
import Img from '../Image/image'
import availableNetworkUrl from '@/assets/img/availableNetwork.png'

export default function AvailableNetwork() {
  return (
    <Box
      display={'grid'}
      gridTemplateColumns={{ xs: '100%', md: '50% 50%' }}
      borderBottom={'1px solid #000000'}
    >
      <Box
        padding={{ xs: '24px', md: '6rem' }}
        borderBottom={{ xs: '1px solid #000000', md: undefined }}
        borderRight={{ xs: undefined, md: '1px solid #000000' }}
      >
        <Typography variant="h5" fontSize={{ xs: 32, md: 69 }} maxWidth={510}>
          Available on your preferred network
        </Typography>
        <Typography fontSize={20} mt={49} maxWidth={510}>
          Krav is currently live on Ethereum, BNB Chain, Arbitrum, Avalanche
        </Typography>
      </Box>
      <Box
        height={{ xs: 260, md: '757px' }}
        overflow="hidden"
        position="relative"
        width="100%"
      >
        <AnimatedBox2 style={{ width: '100%' }}>
          <Img
            src={availableNetworkUrl}
            alt=""
            style={{ width: '100%', height: 'auto' }}
          />
          <Img
            src={availableNetworkUrl}
            alt=""
            style={{ width: '100%', height: 'auto' }}
          />
          <Img
            src={availableNetworkUrl}
            alt=""
            style={{ width: '100%', height: 'auto' }}
          />
          <Img
            src={availableNetworkUrl}
            alt=""
            style={{ width: '100%', height: 'auto' }}
          />
        </AnimatedBox2>
      </Box>
    </Box>
  )
}
