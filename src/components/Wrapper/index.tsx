// Wrapper
import React from 'react'
import type { WrapperProps } from '@/types'

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className="relative z-0 lg:mx-auto lg:max-w-[94rem] lg:px-8">{children}</div>
}
