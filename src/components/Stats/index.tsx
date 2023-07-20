import { Box, Typography } from '@mui/material'
import rec1Url from '@/assets/svg/rectangle1.svg?url'
import rec2Url from '@/assets/svg/rectangle2.svg?url'
import rec3Url from '@/assets/svg/rectangle3.svg?url'
import rec4Url from '@/assets/svg/rectangle4.svg?url'
import Pot from './Pot'

export default function Stats() {
  return (
    <>
      <Box
        display="grid"
        width="100%"
        gridTemplateColumns={'auto auto'}
        gridTemplateRows={'auto auto'}
        height={{ xs: 248, md: '700px' }}
        gap={'20px'}
        sx={{
          '&>div': {
            backgroundSize: '100% 100%',
            backgroundPosition: 'center center',
            padding: { xs: 20, md: '40px', lg: '60px' },
            position: 'relative'
          },
          '& h5': {
            textTransform: 'uppercase',
            fontSize: { xs: 14, md: 28 }
          },
          '& h6': {
            position: 'absolute',
            bottom: { xs: 20, md: 60, lg: 70 },
            right: { xs: 20, md: 60, lg: 70 },
            fontSize: { xs: 24, md: 95 },
            lineHeight: 0.8
          }
        }}
      >
        <Box
          sx={{
            background: `url(${rec1Url.src}) no-repeat`
          }}
        >
          <Typography variant="h5">Staking Fees</Typography>
          <Typography variant="h6" textAlign={'right'}>
            $109,000
          </Typography>
        </Box>
        <Box
          sx={{
            background: `url(${rec2Url.src}) no-repeat`
          }}
        >
          <Typography variant="h5">Volume</Typography>
          <Typography variant="h6">$12345</Typography>
        </Box>
        <Box
          sx={{
            background: `url(${rec3Url.src}) no-repeat`
          }}
        >
          <Typography variant="h5">Collateral Types</Typography>
          <Typography variant="h6" textAlign={'right'}>
            12345 <span>users</span>
          </Typography>
        </Box>
        <Box
          sx={{
            background: `url(${rec4Url.src}) no-repeat`
          }}
        >
          <Typography variant="h5">Collateral Types</Typography>
          <Typography variant="h6">
            123 <span>Assets</span>
          </Typography>
        </Box>
      </Box>
      <Pot />
    </>
  )
}
