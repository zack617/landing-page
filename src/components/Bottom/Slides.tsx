'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import slide1Url from '@/assets/img/slide1.png'
import slide2Url from '@/assets/img/slide2.png'
import slide3Url from '@/assets/img/slide3.png'

import { Box, Typography } from '@mui/material'
import { StaticImageData } from 'next/image'
import Img from '../Image/image'
import { HideOnMobile, ShowOnMobile } from '@/theme'

type SlideContent = [string | StaticImageData, string, string]

const slides: SlideContent[] = [
  [
    slide1Url,
    'Reduce liquidation \nrisks',
    'An aggregate of high-quality price feeds determine when liquidations occur. This keeps positions safe from temporary wicks.'
  ],
  [
    slide2Url,
    'SAVE ON COSTS',
    'Enter and exit positions with minimal spread and zero price impact. Get the optimal price without incurring additional costs.'
  ],
  [
    slide3Url,
    'SIMPLE SWAPS',
    'Open positions through a simple swap interface. Conveniently swap from any supported asset into the position of your choice.'
  ]
]

export default function Slides() {
  return (
    <>
      <HideOnMobile breakpoint="md">
        <Box
          id="slides"
          position="relative"
          sx={{
            maxWidth: '100vw',
            padding: {
              xs: '24px 0 24px 6rem',
              md: '6rem 0 6rem 6rem'
            },
            overflow: 'hidden',
            '& .swiper': { overflow: 'hidden', maxWidth: '100%' },
            '& .swiper-slide': {
              width: { md: 'fit-content', xl: '38%' },
              maxWidth: '38%!important',
              display: 'flex',
              justifyContent: 'center'
            }
          }}
        >
          <Swiper
            breakpoints={{
              1200: {
                slidesPerView: 2.5,
                spaceBetween: 120
              }
            }}
            slidesPerView={2.2}
            spaceBetween={40}
          >
            {slides.map((item, idx) => (
              <SwiperSlide key={item[1]}>
                <Card data={item} idx={idx} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </HideOnMobile>
      <ShowOnMobile breakpoint="md">
        <Box display={'grid'}>
          {slides.map((item, idx) => (
            <Card data={item} idx={idx} key={item[1]} />
          ))}
        </Box>
      </ShowOnMobile>
    </>
  )
}

function Card({
  data: [imgUrl, title, content],
  idx
}: {
  data: SlideContent
  idx: number
}) {
  return (
    <Box
      padding={{ xs: '40px 24px', md: 0 }}
      borderTop={
        idx === 0 ? undefined : { xs: '1px solid #000000', md: 'none' }
      }
      display={'grid'}
      justifyItems={{ xs: 'left', sm: 'center', md: undefined }}
    >
      <Img src={imgUrl} alt="" />
      <Typography
        textTransform={'uppercase'}
        variant="h5"
        fontSize={{ xs: 32, md: 50, lg: 64, xl: 120 }}
        mb={24}
        whiteSpace={{ xs: 'pre', sm: 'nowrap', md: 'pre' }}
      >
        {title}
      </Typography>
      <Typography fontSize={{ xs: 14, md: 20 }} maxWidth={480}>
        {content}
      </Typography>
    </Box>
  )
}
