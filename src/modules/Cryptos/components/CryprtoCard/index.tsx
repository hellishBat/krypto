// CryptoCard

import React from 'react'
import { Button } from '@/components'
import { CryptoCardProps } from '@/types'

export const CryptoCard: React.FC<CryptoCardProps> = ({ data }) => {
  const { img, title, text, price, btnText } = data

  return (
    <article className="h-auto overflow-hidden rounded-xl">
      <div className="ol-blend-overlay">
        <img
          className="aspect-4/3 w-full object-cover lg:aspect-square"
          src={img}
          alt={title}
          loading="lazy"
        />
      </div>
      <div className="flex min-h-[16rem] flex-col bg-white p-4 sm:min-h-[18.75rem] sm:p-6">
        <h3 className="mb-3 text-2xl font-medium text-black">{title}</h3>
        <p className="line-clamp-3 text-lg text-black/60">{text}</p>
        <div className="mt-auto flex flex-col justify-between gap-4 pt-6 xl:flex-row xl:items-center">
          <span className="text-2xl font-bold text-red-500 sm:text-3xl xl:text-4xl">
            {price ? `$${price}` : 'Loading...'}
          </span>
          <Button kind="primary" variant="lg">
            {btnText}
          </Button>
        </div>
      </div>
    </article>
  )
}
