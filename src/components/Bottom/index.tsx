import { Box, Typography } from '@mui/material'
import MarqueeBlue from '../Marquee/MarqueeBlue'
import AvailableNetwork from './AvailableNetwork'
import Connect from './Connect'
import Footer from '../Footer'

export default function Bottom() {
  return (
    <Box>
      <MarqueeBlue />
      <AvailableNetwork />
      <Connect />
      <Footer />
    </Box>
  )
}
