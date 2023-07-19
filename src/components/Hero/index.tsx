import { Box, Typography } from '@mui/material'
import poleUrl from '@/assets/img/pole.png'
import eyeUrl from '@/assets/svg/eye.svg?url'
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
          fontSize={{ xs: 62, sm: 100 }}
          width="100%"
          whiteSpace={'pre'}
          variant="h5"
        >
          {title}
        </Typography>
      </ShowOnMobile>
      <Box
        maxWidth={'100%'}
        maxHeight={'90vh'}
        display="grid"
        width={'100%'}
        justifyItems={'center'}
        gridTemplateColumns={'auto 1fr auto'}
        alignItems={'stretch'}
        gap={23}
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
              fontSize={{ md: 70, lg: 110 }}
              maxWidth={790}
              whiteSpace={'pre'}
              variant="h5"
            >
              {title}
            </Typography>

            <Typography whiteSpace={'pre'}>{subtitle}</Typography>
          </Box>
        </HideOnMobile>
        <Box display={'flex'} height="100%">
          <Box
            display="flex"
            flexDirection={'column'}
            justifyContent={'space-between'}
          >
            <ShowOnMobile>
              <Typography
                whiteSpace={'break-spaces'}
                fontSize={14}
                fontWeight={500}
                textAlign={'center'}
              >
                {subtitle}
              </Typography>
            </ShowOnMobile>
            <HideOnMobile>
              <Img
                src={eyeUrl}
                alt=""
                sx={{ width: { xs: 80, md: 100, lg: 'auto' } }}
              />
            </HideOnMobile>
            <Img
              src={headUrl}
              alt=""
              sx={{ height: { xs: 80, md: 100, lg: 'auto' } }}
            />
          </Box>
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
