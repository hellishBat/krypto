// Hero
import { FC } from 'react'
import { useParallax } from 'react-scroll-parallax'
import { useCountdown } from '@/hooks'
import { Button, Container, Typography } from '@/components'
import { Countdown } from './components'
import data from '@/data/index.json'
import {
  heroBg,
  coinBtc,
  coinEth,
  coinMn,
  coinLtc01,
  IconCoin01,
  IconCoin02,
  IconCoin03,
  IconCoin04,
} from '@/assets'

const { hero } = data

const cryptoLinks = hero.currencies.list.map((item, idx) => ({
  ...item,
  icon: [IconCoin01, IconCoin02, IconCoin03, IconCoin04][idx],
}))

const Hero: FC = () => {
  const { seconds, minutes, hours, days, isCounting } = useCountdown(hero.countdown.targetDate)

  const countdownTime = [{ time: days }, { time: hours }, { time: minutes }, { time: seconds }]

  const countdownData = hero.countdown.display.map((item, idx) => ({
    ...item,
    ...countdownTime[idx],
  }))

  const btcPlx = useParallax({ speed: 10 })
  const ethPlx = useParallax({ speed: -10 })
  const ltcPlx = useParallax({ speed: -15 })
  const mnPlx = useParallax({ speed: 15 })

  return (
    <section
      className="ol-double-gradient relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
      id="heroSection"
    >
      <Container>
        <div className="relative z-0 flex min-h-[30rem] flex-col items-center py-28 sm:min-h-[36rem] md:min-h-[48rem] lg:py-40 xl:py-48">
          <figure
            className="pointer-events-none absolute -left-[10%] top-1/3 -z-[1] h-[8.796vh] w-[8.796vh] bg-contain sm:left-0"
            style={{ backgroundImage: `url(${coinBtc})` }}
            ref={btcPlx.ref}
          ></figure>
          <figure
            className="pointer-events-none absolute -bottom-[18%] -left-[16%] -z-[1] h-[14.815vh] w-[14.815vh] bg-contain sm:-left-[12%] lg:-left-[6%]"
            style={{ backgroundImage: `url(${coinEth})` }}
            ref={ethPlx.ref}
          ></figure>
          <figure
            className="absolute -right-[12%] top-1/4 -z-[1] h-[12.963vh] w-[12.963vh] bg-contain sm:-right-[5%] "
            style={{ backgroundImage: `url(${coinLtc01})` }}
            ref={ltcPlx.ref}
          ></figure>
          <figure
            className="absolute bottom-[12%] right-0 -z-[1] h-[5.833vh] w-[5.833vh] bg-contain"
            style={{ backgroundImage: `url(${coinMn})` }}
            ref={mnPlx.ref}
          ></figure>

          <Typography as="h1">
            <span className="block">{hero.headingLine1}</span>
            <span className="block">{hero.headingLine2}</span>
          </Typography>

          {isCounting ? (
            <Countdown countdownData={countdownData} countdownText={hero.tagLine} />
          ) : (
            <p className="mb-10 max-w-sm text-justify md:max-w-md md:text-center lg:max-w-lg">
              {hero.completedTagline}
            </p>
          )}

          <div className="mb-10 flex w-full flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
            <Button as="anchor" kind="primary" variant="lg" shadow="xl" to="downloadsSection">
              {hero.buttons[0].text}
            </Button>
            <Button as="anchor" kind="secondary" variant="lg" shadow="xl" to="howToSection">
              {hero.buttons[1].text}
            </Button>
          </div>

          <p className="mb-6 text-lg font-medium uppercase">{hero.currencies.heading}</p>
          <ul className="grid grid-cols-2 gap-5 md:gap-8 lg:grid-cols-4">
            {cryptoLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  className="flex items-center text-xl transition ease-in-out lg:duration-300 lg:hover:text-red-500"
                  href={link.href}
                >
                  <link.icon width="1.5rem" height="1.5rem" />
                  <span className="ml-3">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default Hero
