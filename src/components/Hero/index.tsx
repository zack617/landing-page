import { Box, Typography } from '@mui/material'
import poleUrl from '@/assets/img/pole.png'
// @ts-ignore
import eyeUrl from '@/assets/svg/eye.svg?url'
// @ts-ignore
import headUrl from '@/assets/svg/head.svg?url'
import Img from '../Image/image'
import { HideOnMobile, ShowOnMobile } from '@/theme'

const title = 'Trade BTC with \nleverage using \nany altcoin as \ncollateral'
const subtitle =
  'Krav is a next generation decentralized quanto \nperpetual exchange.'

export default function Hero() {
  return (
    <>
      <ShowOnMobile>
        <Typography
          component="div"
          fontSize={{ xs: 62, sm: 100 }}
          width="100%"
          whiteSpace={'pre'}
          variant="h5"
          position="relative"
        >
          {title}
          <Img
            src={eyeUrl}
            alt=""
            sx={{
              width: { xs: 60, sm: 80 },
              position: 'absolute',
              right: 0,
              bottom: { xs: -20, sm: 0 }
            }}
          />
        </Typography>
      </ShowOnMobile>
      <Box
        maxWidth={1440}
        overflow={'hidden'}
        maxHeight={'90vh'}
        display="grid"
        width={'100%'}
        justifyItems={'center'}
        gridTemplateColumns={'auto 1fr auto'}
        alignItems={'stretch'}
        gap={{ xs: 0, md: 23 }}
      >
        <Img
          src={poleUrl}
          style={{
            height: '100%',
            width: 'auto',
            margin: 'auto 0'
          }}
          alt=""
        />
        <HideOnMobile>
          <Box flexGrow={1}>
            <Typography
              fontSize={{ md: 79, lg: 110 }}
              maxWidth={790}
              whiteSpace={'pre'}
              variant="h5"
            >
              {title}
            </Typography>

            <Typography whiteSpace={'pre'}>{subtitle}</Typography>
          </Box>
        </HideOnMobile>
        <ShowOnMobile>
          <Box
            display="flex"
            flexDirection={'column'}
            justifyContent={'space-between'}
            height={'100%'}
            alignItems={'center'}
          >
            <Typography
              whiteSpace={'break-spaces'}
              fontSize={14}
              fontWeight={500}
              textAlign={'center'}
            >
              {subtitle}
            </Typography>
            <Img src={headUrl} alt="" sx={{ height: 120 }} />
          </Box>
        </ShowOnMobile>
        <Box display={'flex'} height="100%">
          <HideOnMobile>
            <Box
              display="flex"
              height="100%"
              flexDirection={'column'}
              justifyContent={'space-between'}
              alignItems={'center'}
              width={'40%'}
            >
              <Img
                src={eyeUrl}
                alt=""
                sx={{ width: { xs: 80, md: 100, lg: 'auto' } }}
              />

              <Img
                src={headUrl}
                alt=""
                sx={{ height: { md: 100, lg: 'auto' } }}
              />
            </Box>
          </HideOnMobile>
          <Img
            src={poleUrl}
            alt=""
            style={{
              height: '100%',
              width: 'auto',
              margin: 'auto 0'
            }}
          />
        </Box>
      </Box>
    </>
  )
}
