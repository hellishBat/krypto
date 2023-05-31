// Footer Credits
import React from 'react'
import type { FooterCreditsProps } from '@/types'

export const FooterCredits: React.FC<FooterCreditsProps> = ({ links }) => {
  return (
    <ul className="flex flex-shrink-0 gap-4 lg:min-w-[200px]">
      {links.map((link, idx) => (
        <li key={idx}>
          <a
            className="transition-colors lg:hover:text-red-500 lg:hover:underline"
            href={link.href}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
