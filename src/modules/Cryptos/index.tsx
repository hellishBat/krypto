// Cryptos
import React, { useRef, useEffect } from 'react'
import { useParallax } from 'react-scroll-parallax'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper'
import 'swiper/scss'
import 'swiper/css/pagination'
import { usePricesRequest } from '@/hooks'
import { Container, Section, SectionHeader, Typography, Wrapper } from '@/components'
import { CryptoCard } from './components'
import { COIN_GECKO_API } from '@/api'
import data from '@/data/index.json'
import {
  IconUiArrowPrev,
  IconUiArrowNext,
  coinMn,
  coinLtc02,
  imgCryptos01,
  imgCryptos02,
  imgCryptos03,
  imgCryptos04,
  imgCryptos05,
  imgCryptos06,
} from '@/assets'

const { cryptos } = data

const cardImages = [
  { img: imgCryptos01 },
  { img: imgCryptos02 },
  { img: imgCryptos03 },
  { img: imgCryptos04 },
  { img: imgCryptos05 },
  { img: imgCryptos06 },
]

const Cryptos: React.FC = () => {
  const { coinPrices } = usePricesRequest(COIN_GECKO_API)

  const navigationPrevRef = useRef<HTMLButtonElement>(null)
  const navigationNextRef = useRef<HTMLButtonElement>(null)
  const swiperRef = useRef<any>(null)

  const mnPlx = useParallax({ speed: 10 })
  const ltcPlx = useParallax({ translateX: [-100, 100], rotate: [0, 360] })

  const cardsContent = cryptos.items.map((item, idx) => ({
    ...item,
    price: coinPrices[idx],
    ...cardImages[idx],
  }))

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.navigation?.update()
    }
  }, [cardsContent])

  return (
    <Section className="pb-20 lg:pb-36" id="cryptosSection">
      <Container>
        <SectionHeader>
          <Typography as="h2">{cryptos.heading}</Typography>
          <Typography as="p">{cryptos.paragraph}</Typography>
        </SectionHeader>
      </Container>
      <Wrapper>
        <Container variant="mobFluid">
          <div>
            <figure
              className="pointer-events-none absolute -top-[15%] left-[3%] -z-[1] h-[5.833vh] w-[5.833vh] bg-contain"
              style={{ backgroundImage: `url(${coinMn})` }}
              ref={mnPlx.ref}
            ></figure>
            <figure
              className="pointer-events-none absolute -bottom-[14%] -left-[15%] -z-[1] h-[14.815vh] w-[14.815vh] bg-contain sm:-bottom-[17%] sm:left-[0.5%] lg:-bottom-[21.5%]"
              style={{ backgroundImage: `url(${coinLtc02})` }}
              ref={ltcPlx.ref}
            ></figure>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Keyboard, Mousewheel]}
            spaceBetween={32}
            slidesPerView={'auto'}
            centeredSlides={true}
            loop={false}
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
              <SwiperSlide className="max-w-[18rem] md:max-w-[20rem] lg:max-w-none" key={idx}>
                <CryptoCard data={item} />
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

export default Cryptos
