// TestimonialsCard
import React from 'react'
import type { TestimonialCardProps } from '@/types'
import { IconQuotMark } from '@/assets'

export const TestimonialsCard: React.FC<TestimonialCardProps> = ({ data }) => {
  const { text, img, author, position } = data

  return (
    <article className="flex h-auto flex-col items-center overflow-hidden rounded-xl border-2 border-red-500 bg-navy px-4 py-9 text-center sm:px-9 sm:py-16">
      <IconQuotMark className="text-[5rem]" />
      <div className="flex min-h-[15.25rem] flex-col items-center pt-6">
        <p className="mb-6 line-clamp-3 text-lg text-white/60">{text}</p>
        <picture className="mb-3 mt-auto h-12 w-12 overflow-hidden rounded-full object-cover opacity-80">
          <img className="h-full w-full" src={img} alt={author} loading="lazy" />
        </picture>
        <h3 className="text-xl font-medium">{author}</h3>
        <span className="text-red-500">{position}</span>
      </div>
    </article>
  )
}
