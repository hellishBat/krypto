// Header
import React from 'react'
import { Container, Logo } from '@/components'
import { Nav } from './components'
import { useScroll } from '@/hooks'
import data from '@/data/index.json'

const { navLinks } = data

const Header: React.FC = () => {
  const isScrolled = useScroll()

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full py-3 text-white transition duration-500 md:py-4 lg:py-8 ${
        isScrolled ? 'bg-navy shadow-md' : ''
      }`}
    >
      <Container>
        <div className="mx-auto flex items-center">
          <Logo className="flex-shrink-0" />
          <Nav navLinks={navLinks} />
        </div>
      </Container>
    </header>
  )
}

export default Header
