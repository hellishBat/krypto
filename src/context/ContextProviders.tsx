// ContextProviders
import { FC } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { ChildrenTypes } from '@/types'

const ContextProviders: FC<ChildrenTypes> = ({ children }) => {
  return <ParallaxProvider>{children}</ParallaxProvider>
}

export default ContextProviders
