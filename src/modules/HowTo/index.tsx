// HowTo
import React from 'react'
import { useParallax } from 'react-scroll-parallax'
import { Container, Section, SectionHeader, Typography } from '@/components'
import { HowToTabs } from './components'
import data from '@/data/index.json'
import {
  previewHowTo01,
  previewHowTo02,
  previewHowTo03,
  previewHowTo04,
  movHowTo01,
  movHowTo02,
  movHowTo03,
  movHowTo04,
  coinEth,
} from '@/assets'

const { howTo } = data

const tabsMedia = [
  { img: previewHowTo01, mov: movHowTo01 },
  { img: previewHowTo02, mov: movHowTo02 },
  { img: previewHowTo03, mov: movHowTo03 },
  { img: previewHowTo04, mov: movHowTo04 },
]

const tabsContent = howTo.tabs.map((item, idx) => ({
  ...item,
  ...tabsMedia[idx],
}))

const HowToTrade: React.FC = () => {
  const ethPlx = useParallax({ speed: -10 })

  return (
    <Section className="pb-8" id="howToSection">
      <SectionHeader>
        <Typography as="h2">{howTo.heading}</Typography>
        <Typography as="p">{howTo.paragraph}</Typography>
      </SectionHeader>
      <Container>
        <div className="relative z-0">
          <figure
            className="pointer-events-none absolute -bottom-[11%] -right-[20%] -z-[1] h-[14.815vh] w-[14.815vh] bg-contain lg:-right-[8%]"
            style={{ backgroundImage: `url(${coinEth})` }}
            ref={ethPlx.ref}
          />
          <HowToTabs data={tabsContent} subheading={howTo.subheading} />
        </div>
      </Container>
    </Section>
  )
}

export default HowToTrade
