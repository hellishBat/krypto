// UniversityCard
import React from 'react'
import { UniversityCardProps } from '@/types'

export const UniversityCard: React.FC<UniversityCardProps> = ({ data }) => {
  const { img, title, text, linkText } = data

  return (
    <article className="flex gap-8">
      <picture className="aspect-square h-24 w-24 flex-shrink-0 flex-grow-0 overflow-hidden rounded-lg opacity-80 sm:h-40 sm:w-40">
        <img className="h-full w-full object-cover" src={img} alt={title} loading="lazy" />
      </picture>
      <div className="flex flex-col items-start">
        <h3 className="mb-3 text-xl font-medium md:text-2xl">{title}</h3>
        <p className="line-clamp-3 text-lg text-white/60">{text}</p>
        <a className="mt-auto text-lg text-red-500 transition lg:hover:underline" href={data.href}>
          {linkText}
        </a>
      </div>
    </article>
  )
}
