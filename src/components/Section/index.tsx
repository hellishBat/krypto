// Section
import React from 'react'
import type { SectionProps } from '@/types'

export const Section: React.FC<SectionProps> = ({ id, children, className }) => {
  const classes = `pt-16 md:pt-20 lg:pt-24 ${className}`

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  )
}
