// Layout
import { FC } from 'react'
import { ChildrenTypes } from '@/types'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'

const Layout: FC<ChildrenTypes> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-tl from-green-300 via-blue-500 to-purple-600 text-white">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
