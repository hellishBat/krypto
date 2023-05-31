// Typography
import React, { ElementType } from 'react'
import { TypographyProps } from '@/types'

export const Typography: React.FC<TypographyProps> = ({ as, children, className }) => {
  let Component: ElementType

  switch (as) {
    case 'h1':
      Component = 'h1'
      break
    case 'h2':
      Component = 'h2'
      break
    case 'h3':
      Component = 'h3'
      break
    case 'h4':
      Component = 'h4'
      break
    case 'p':
      Component = 'p'
      break
    default:
      Component = 'p'
      break
  }

  const tagClasses = {
    h1: 'mb-7 text-center text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl',
    h2: 'text-4xl font-bold text-center md:text-5xl lg:text-6xl',
    h3: 'mb-10 text-center text-4xl font-bold text-red-500 sm:text-left',
    h4: 'mb-6 text-2xl font-medium uppercase text-red-500 md:mb-9',
    p: 'text-xl text-white/60 md:text-2xl',
  }

  const classes = `${tagClasses[as]} ${className}`

  return <Component className={classes}>{children}</Component>
}
