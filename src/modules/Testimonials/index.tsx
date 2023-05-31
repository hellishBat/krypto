// Testimonials
import React, { useRef, useEffect } from 'react'
import { useParallax } from 'react-scroll-parallax'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper'
import 'swiper/scss'
import 'swiper/css/pagination'
import { Container, Section, SectionHeader, Typography, Wrapper } from '@/components'
import { TestimonialsCard } from './components'
import data from '@/data/index.json'
import {
  IconUiArrowPrev,
  IconUiArrowNext,
  coinBtc,
  coinEth,
  coinMn,
  imgAuthor01,
  imgAuthor02,
  imgAuthor03,
  imgAuthor04,
  imgAuthor05,
  imgAuthor06,
} from '@/assets'

const { testimonials } = data

interface Testimonial {
  text: string
  img: string
  author: string
  position: string
}

const authorsImages = [
  { img: imgAuthor01 },
  { img: imgAuthor02 },
  { img: imgAuthor03 },
  { img: imgAuthor04 },
  { img: imgAuthor05 },
  { img: imgAuthor06 },
]

const Testimonials: React.FC = () => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null)
  const navigationNextRef = useRef<HTMLButtonElement>(null)
  const swiperRef = useRef<any>(null)

  const mnPlx = useParallax({ speed: 5 })
  const btcPlx = useParallax({ speed: 10 })
  const ethPlx = useParallax({ speed: -10 })

  const cardsContent: Testimonial[] = testimonials.items.map((item, idx) => ({
    ...item,
    ...authorsImages[idx],
  }))

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.navigation?.update()
    }
  }, [cardsContent])

  return (
    <Section className="pb-20 md:pb-28 lg:pb-36" id="testimonialsSection">
      <SectionHeader>
        <Typography as="h2">{testimonials.heading}</Typography>
        <Typography as="p">{testimonials.paragraph}</Typography>
      </SectionHeader>
      <Wrapper>
        <Container variant="mobFluid">
          <div>
            <figure
              className="pointer-events-none absolute -left-[4%] top-0 -z-[1] h-[5.833vh] w-[5.833vh] bg-contain sm:-top-[40%] sm:left-0"
              style={{ backgroundImage: `url(${coinMn})` }}
              ref={mnPlx.ref}
            ></figure>
            <figure
              className="pointer-events-none absolute -bottom-[10%] -left-[9%] -z-[1] h-[8.796vh] w-[8.796vh] bg-contain sm:-left-[4%] md:-bottom-[25%]"
              style={{ backgroundImage: `url(${coinBtc})` }}
              ref={btcPlx.ref}
            ></figure>
            <figure
              className="pointer-events-none absolute -bottom-[33%] -right-[18%] -z-[1] h-[14.815vh] w-[14.815vh] bg-contain sm:-right-[2%]"
              style={{ backgroundImage: `url(${coinEth})` }}
              ref={ethPlx.ref}
            ></figure>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Keyboard, Mousewheel]}
            spaceBetween={32}
            slidesPerView={'auto'}
            centeredSlides={true}
            loop={true}
            keyboard={{
              enabled: true,
            }}
            mousewheel={{
              forceToAxis: true,
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
              setTimeout(() => {
                if (navigationPrevRef.current && navigationNextRef.current) {
                  swiper.navigation?.update()
                }
              })
            }}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                initialSlide: 1,
              },
            }}
          >
            {cardsContent.map((item, idx) => (
              <SwiperSlide
                className="slide-shadow max-w-[18rem] md:max-w-[20rem] lg:max-w-none"
                key={idx}
              >
                <TestimonialsCard data={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div>
            <button className="swiper-prev-btn" ref={navigationPrevRef}>
              <IconUiArrowPrev />
            </button>
            <button className="swiper-next-btn" ref={navigationNextRef}>
              <IconUiArrowNext />
            </button>
          </div>
        </Container>
      </Wrapper>
    </Section>
  )
}

export default Testimonials
