// Container
import { FC } from 'react'
import type { ContainerProps } from '@/types'

export const Container: FC<ContainerProps> = ({ variant = 'default', children }) => {
  const getContainerClass = () => {
    switch (variant) {
      case 'default':
        return 'container mx-auto'
      case 'mobFluid':
        return 'lg:container lg:mx-auto'
      default:
        return ''
    }
  }

  const containerClass = getContainerClass()

  return <div className={containerClass}>{children}</div>
}
