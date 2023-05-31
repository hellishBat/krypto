// FooterNav
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import type { FooterNavProps, HyperlinkItem, AnchorItem } from '@/types'

export const FooterNav: React.FC<FooterNavProps> = ({ as, links }) => {
  return (
    <ul className="space-y-4 text-lg">
      {links.map((link, idx) => (
        <li key={idx}>
          {as === 'hyperlink' && (
            <a
              className="transition-colors lg:hover:text-red-500 lg:hover:underline"
              href={(link as HyperlinkItem).href}
            >
              {link.label}
            </a>
          )}
          {as === 'anchor' && (
            <ScrollLink
              className="transition-colors lg:hover:text-red-500 lg:hover:underline"
              to={(link as AnchorItem).to}
              smooth={true}
              offset={-64}
              duration={1000}
            >
              {link.label}
            </ScrollLink>
          )}
        </li>
      ))}
    </ul>
  )
}
