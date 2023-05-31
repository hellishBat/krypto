// Features
import { FC } from 'react'
import { useParallax } from 'react-scroll-parallax'
import { Container, Section, SectionHeader, Typography } from '@/components'
import { FeaturesCard } from './components'
import data from '@/data/index.json'
import {
  IconFeatures01,
  IconFeatures02,
  IconFeatures03,
  IconFeatures04,
  IconFeatures05,
  IconFeatures06,
  coinBtc,
} from '@/assets'

const { features } = data

const featureIcons = [
  {
    icon: <IconFeatures01 className="flex-shrink-0 text-[4.063rem]" />,
  },
  {
    icon: <IconFeatures02 className="flex-shrink-0 text-[4.063rem]" />,
  },
  {
    icon: <IconFeatures03 className="flex-shrink-0 text-[4.063rem]" />,
  },
  {
    icon: <IconFeatures04 className="flex-shrink-0 text-[4.063rem]" />,
  },
  {
    icon: <IconFeatures05 className="flex-shrink-0 text-[4.063rem]" />,
  },
  {
    icon: <IconFeatures06 className="flex-shrink-0 text-[4.063rem]" />,
  },
]

const featuresCardContent = features.items.map((item, idx) => ({
  ...item,
  ...featureIcons[idx],
}))

const Features: FC = () => {
  const btcPlx = useParallax({ speed: -10 })

  return (
    <Section className="pb-20 md:pb-28 lg:pb-36" id="featuresSection">
      <SectionHeader>
        <Typography as="h2">{features.heading}</Typography>
        <Typography as="p">{features.paragraph}</Typography>
      </SectionHeader>
      <Container>
        <div className="relative z-0">
          <figure
            className="pointer-events-none absolute -right-[15%] -top-[18%] -z-[1] h-[8.796vh] w-[8.796vh] bg-contain sm:-right-[6%] sm:-top-[25%] lg:-top-[40%]"
            style={{ backgroundImage: `url(${coinBtc})` }}
            ref={btcPlx.ref}
          ></figure>

          <div className="grid justify-center gap-8 sm:grid-cols-2 xl:grid-cols-3 ">
            {featuresCardContent.map((item, idx) => (
              <FeaturesCard data={item} key={idx} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Features
