// University
import React from 'react'
import { useParallax } from 'react-scroll-parallax'
import { Button, Container, Section, SectionHeader, Typography } from '@/components'
import { UniversityCard } from './components'
import data from '@/data/index.json'
import { imgArticle01, imgArticle02, imgArticle03, imgArticle04, coinMn } from '@/assets'

const { university } = data

const articlesPreviews = [
  { img: imgArticle01 },
  { img: imgArticle02 },
  { img: imgArticle03 },
  { img: imgArticle04 },
]

const cardsContent = university.items.map((item, idx) => ({
  ...item,
  ...articlesPreviews[idx],
}))

const University: React.FC = () => {
  const mnPlx = useParallax({ speed: 10 })

  return (
    <Section className="pb-14 md:pb-16 lg:pb-20" id="uniSection">
      <SectionHeader>
        <Typography as="h2">{university.heading}</Typography>
        <Typography as="p">{university.paragraph}</Typography>
      </SectionHeader>
      <Container>
        <div className="relative z-0">
          <figure
            className="pointer-events-none absolute -bottom-[11%] -right-[13%] -z-[1] h-[8.333vh] w-[8.333vh] bg-contain sm:-bottom-[19%] sm:-right-[6.5%]"
            style={{ backgroundImage: `url(${coinMn})` }}
            ref={mnPlx.ref}
          ></figure>

          <div className="mb-12 grid gap-8 md:grid-cols-2">
            {cardsContent.map((item, idx) => (
              <UniversityCard data={item} key={idx} />
            ))}
          </div>
          <div className="flex justify-center">
            <Button kind="secondary" variant="lg">
              {university.btnText}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default University
