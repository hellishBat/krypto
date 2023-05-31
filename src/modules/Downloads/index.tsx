// Downloads
import React from 'react'
import { Button, Container, Typography } from '@/components'
import data from '@/data/index.json'
import { downloadsBg, IconBadgeAppStore, IconBadgeGooglePlay } from '@/assets'

const { downloads } = data

const downloadLinksData = [
  {
    btnLogo: (
      <IconBadgeGooglePlay
        width="11.375rem"
        height="100%"
        title="Download from Google Play Store"
      />
    ),
    href: '#',
  },
  {
    btnLogo: (
      <IconBadgeAppStore width="11.375rem" height="100%" title="Download on the App Store" />
    ),
    href: '#',
  },
]

const Downloads: React.FC = () => {
  return (
    <section
      className="ol-blend-darken bg-cover bg-center bg-no-repeat pb-24 pt-20 md:pb-36 md:pt-32 lg:pb-44 lg:pt-40 "
      style={{ backgroundImage: `url(${downloadsBg})` }}
      id="downloadsSection"
    >
      <Container>
        <Typography className="mb-10" as={'h2'}>
          {downloads.heading}
        </Typography>
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
          {downloadLinksData.map((item, idx) => (
            <Button kind="download" shadow="xl" key={idx}>
              {item.btnLogo}
            </Button>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Downloads
