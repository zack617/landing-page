import { Box, Typography } from '@mui/material'
// @ts-ignore
import rec1Url from '@/assets/svg/rectangle1.svg?url'
// @ts-ignore
import rec2Url from '@/assets/svg/rectangle2.svg?url'
// @ts-ignore
import rec3Url from '@/assets/svg/rectangle3.svg?url'
// @ts-ignore
import rec4Url from '@/assets/svg/rectangle4.svg?url'
import Pot from './Pot'
import Img from '../Image/image'

export default function Stats() {
  return (
    <>
      <Box
        display="grid"
        width="100%"
        gridTemplateColumns={'auto auto'}
        gridTemplateRows={'auto auto'}
        height={{ xs: 248, md: '700px' }}
        gap={{ xs: 16, md: '20px' }}
        sx={{
          '&>div': {
            backgroundSize: '100% 100%!important',
            backgroundPosition: 'center center',
            padding: { xs: 16, md: '40px', lg: '60px' },
            position: 'relative'
          },
          '& img': {
            width: '100%',
            height: '100%',
            position: 'absolute',
            zIndex: 0,
            top: 0,
            left: 0,
            objectFit: 'cover'
          },
          '& h5': {
            textTransform: 'uppercase',
            fontSize: { xs: 14, md: 28 }
          },
          '& h6': {
            position: 'absolute',
            right: { xs: 16, md: 60, lg: 70 },
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
          {/* <Img src={rec1Url.src} alt="" /> */}
          {/* <Rec1 viewBox="0 0 588 340" /> */}
          <Typography variant="h5">Staking Fees</Typography>
          <Typography
            variant="h6"
            textAlign={'right'}
            bottom={{ xs: 12, md: 60, lg: 70 }}
          >
            $109,000
          </Typography>
        </Box>
        <Box
          sx={{
            background: `url(${rec2Url.src}) no-repeat`
          }}
        >
          <Typography variant="h5">Volume</Typography>
          <Typography variant="h6" bottom={{ xs: 12, md: 60, lg: 70 }}>
            $12345
          </Typography>
        </Box>
        <Box
          sx={{
            background: `url(${rec3Url.src}) no-repeat`
          }}
        >
          <Typography variant="h5">USER</Typography>
          <Typography
            variant="h6"
            textAlign={'right'}
            bottom={{ xs: 20, md: 60, lg: 70 }}
          >
            12345 <span>users</span>
          </Typography>
        </Box>
        <Box
          sx={{
            background: `url(${rec4Url.src}) no-repeat`
          }}
        >
          <Typography variant="h5">$ AS Collateral</Typography>
          <Typography variant="h6" bottom={{ xs: 20, md: 60, lg: 70 }}>
            123 <span>Assets</span>
          </Typography>
        </Box>
      </Box>
      <Pot />
    </>
  )
}
