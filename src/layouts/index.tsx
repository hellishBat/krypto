// Layout
import { FC } from 'react'
import { ChildrenTypes } from '@/types'
import Header from '@/modules/Header'
import Footer from '@/modules/Footer'

const Layout: FC<ChildrenTypes> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
