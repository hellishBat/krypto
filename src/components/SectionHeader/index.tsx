// SectionHeader
import React from 'react'
import type { SectionHeaderProps } from '@/types'

export const SectionHeader: React.FC<SectionHeaderProps> = ({ children, className }) => {
  const classes = `mb-14 text-center md:mb-16 lg:mb-20 space-y-5 ${className}`

  return <div className={classes}>{children}</div>
}
