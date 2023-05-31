// Nav
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-scroll'
import { useOnClickOutside } from '@/hooks'
import { LangSwitcher, MenuButton } from '../'
import type { NavProps } from '@/types'

export const Nav: React.FC<NavProps> = ({ navLinks }) => {
  const [navIsOpen, setNavOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  useOnClickOutside(navRef, () => setNavOpen(false))

  const toggleNav = () => {
    setNavOpen(!navIsOpen)
  }

  const collapseNav = () => {
    setNavOpen(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', collapseNav)
    window.addEventListener('resize', collapseNav)

    return () => {
      window.removeEventListener('scroll', collapseNav)
      window.removeEventListener('resize', collapseNav)
    }
  }, [])

  return (
    <nav className="flex w-full items-center" ref={navRef} role="navigation">
      <div className="ml-auto flex pl-[0.563rem] lg:order-2 lg:ml-0">
        <LangSwitcher />

        <MenuButton navIsOpen={navIsOpen} toggleNav={toggleNav} />
      </div>

      <menu
        className={`lg:order-0 fixed top-0 right-0 w-full rounded-b-xl bg-navy shadow-md transition-transform duration-500 will-change-transform lg:static lg:mx-auto lg:h-auto lg:w-auto lg:translate-y-0 lg:rounded-none lg:bg-transparent lg:shadow-none ${
          navIsOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container">
          <ul className="flex flex-col divide-y divide-white/20 pt-16 pb-8 lg:max-w-none lg:flex-row lg:gap-2 lg:divide-none lg:p-0">
            {navLinks.map((link, idx) => (
              <li className="py-4 px-4 lg:px-6 lg:py-0" key={idx}>
                <Link
                  className="uppercase transition-colors lg:hover:text-red-500"
                  href="#"
                  activeClass="text-red-500"
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={1000}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </menu>
    </nav>
  )
}
