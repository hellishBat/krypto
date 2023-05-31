// SocialLinks
import React from 'react'
import type { SocialLinksProps } from '@/types'

export const SocialLinks: React.FC<SocialLinksProps> = ({ data }) => {
  return (
    <ul className="flex gap-4 sm:justify-end sm:gap-3 md:order-last lg:min-w-[200px]">
      {data.map((link, idx) => (
        <li key={idx}>
          <a
            className="text-2xl transition-colors sm:text-xs lg:hover:text-red-500"
            href={link.href}
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
