import MarqueeTop from '@/components/Marquee/MarqueeTop'
import Hero from '@/components/Hero'
import Marquee2 from '@/components/Marquee/Marquee2'
import Stats from '@/components/Stats'
import { Box } from '@mui/material'
import MarqueeBlue from '@/components/Marquee/MarqueeBlue'
import Explaination1 from '@/components/Explaination/Explaination1'
import Explaination2 from '@/components/Explaination/Explaination2'
import Bottom from '@/components/Bottom'

export default function Home() {
  return (
    <>
      <Box
        component="main"
        display="flex"
        flexDirection={'column'}
        alignItems={'center'}
        px={{ xs: '24px', md: '40px', lg: '6rem' }}
        pt={{ xs: '28px', md: '3rem' }}
        minHeight={'100vh'}
        gap={{ xs: 42, sm: 62, md: 100 }}
      >
        <MarqueeTop />
        <Hero />
        <Marquee2 />
        <Stats />
        <MarqueeBlue />
        <Explaination1 />
        <Marquee2 />
        <Explaination2 />
      </Box>
      <Bottom />
    </>
  )
}
