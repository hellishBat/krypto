// FeaturesCard
import { FC } from 'react'
import { Typography } from '@/components'
import type { FeaturesCardProps } from '@/types'

export const FeaturesCard: FC<FeaturesCardProps> = ({ data }) => {
  const { icon, title, description } = data

  return (
    <article className="max-w-[25rem] md:max-w-none">
      <div className="mb-4 flex flex-col items-center gap-4 md:mb-6 md:flex-row md:items-start md:gap-8">
        {icon}
        <h3 className="text-center text-2xl font-medium md:text-left md:text-3xl">{title}</h3>
      </div>
      <Typography
        as="p"
        className="line-clamp-3 text-center text-xl text-white/60 md:text-left md:text-2xl"
      >
        {description}
      </Typography>
    </article>
  )
}
