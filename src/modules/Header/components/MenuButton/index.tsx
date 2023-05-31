// MenuButton
import React from 'react'
import { IconUiMenuOpen, IconUiMenuClose } from '@/assets'

export const MenuButton: React.FC<{ navIsOpen: boolean; toggleNav: () => void }> = ({
  navIsOpen,
  toggleNav,
}) => {
  return (
    <button
      type="button"
      className={`relative z-[52] ml-4 inline-flex items-center p-2 text-xl ${
        navIsOpen ? 'bg-red-500' : 'bg-navy/50'
      } rounded-lg border-2 border-red-500 transition-colors lg:hidden`}
      onClick={toggleNav}
    >
      {navIsOpen ? <IconUiMenuClose /> : <IconUiMenuOpen />}
    </button>
  )
}
