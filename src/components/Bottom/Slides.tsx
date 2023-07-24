'use client'
import { SwiperSlide } from 'swiper/react'
import 'swiper/css'
import slide1Url from '@/assets/img/slide1.png'
import slide2Url from '@/assets/img/slide2.png'
import slide3Url from '@/assets/img/slide3.png'
import { Box, Typography } from '@mui/material'
import { StaticImageData } from 'next/image'
import Img from '../Image/image'
import { HideOnMobile, ShowOnMobile } from '@/theme'
import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
  useEffect(() => {
    let sections = gsap.utils.toArray('.slide')
    const slides = document.getElementById('slides')

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '#slides',
        anticipatePin: 1,
        pin: '#bottom',
        scrub: 1,
        start: 'top top+=200',
        end: () => '+=' + (slides ? slides.scrollWidth * 2.5 : 4000)
      }
    })
  }, [])

  return (
    <>
      <HideOnMobile breakpoint="md">
        <Box
          id="slides"
          position="relative"
          sx={{
            maxWidth: '100vw',
            padding: {
              xs: '24px 0',
              md: '120px 0'
            },
            overflow: 'hidden'
            // '& .swiper': { overflow: 'hidden', maxWidth: '100%' },
            // '& .swiper-slide': {
            //   width: { md: 'fit-content', xl: '38%' },
            //   maxWidth: '38%!important',
            //   display: 'flex',
            //   justifyContent: 'center'
            // }
          }}
        >
          <Box
            display={'flex'}
            gap={{ xs: 40, md: 120 }}
            sx={{
              maxWidth: '100vw',
              overflowX: 'hidden'
            }}
          >
            {slides.map((item, idx) => (
              <Box width="40vw" key={idx} className="slide">
                <SwiperSlide key={item[1]}>
                  <Card data={item} idx={idx} />
                </SwiperSlide>{' '}
              </Box>
            ))}
          </Box>
          {/* <Swiper
            breakpoints={{
              1200: {
                slidesPerView: 2.5,
                spaceBetween: 120
              }
            }}
            slidesPerView={2.2}
            spaceBetween={40}
          >
         
          </Swiper> */}
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
      pl={
        // idx === 0
        //   ?
        {
          xs: '24px',
          md: '120px'
        }
        // : { xs: '40px 24px', md: 0 }
      }
      borderTop={
        idx === 0 ? undefined : { xs: '1px solid #000000', md: 'none' }
      }
      display={'grid'}
      justifyItems={{ xs: 'left', sm: 'center', md: 'left' }}
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
