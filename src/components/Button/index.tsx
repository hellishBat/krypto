// Button
import { Link } from 'react-scroll'
import type { ButtonProps } from '@/types'

const buttonStyles = {
  kind: {
    primary: 'bg-red-500',
    secondary: 'bg-navy/50 border-2 border-red-500',
    download: 'py-[2px] rounded-[0.625rem] bg-black border-2 border-white overflow-hidden',
  },
  variant: {
    lg: 'px-5 py-3 rounded-[3rem] border-2 border-red-500 sm:px-6 sm:py-4 w-full max-w-sm sm:w-auto',
    default: '',
  },
  shadow: {
    xl: 'shadow-xl',
    default: '',
  },
  general: 'font-bold text-center uppercase whitespace-nowrap will-change-transform ',
  transitions:
    'transition lg:hover:scale-105 lg:active:shadow-inner lg:focus:outline-none lg:focus:ring-2 lg:focus:ring-red-500/40',
}

export const Button: React.FC<ButtonProps> = ({
  as,
  kind,
  variant = 'default',
  shadow = 'default',
  href,
  to,
  children,
  ...props
}) => {
  const buttonClassNames = `${buttonStyles.kind[kind]} ${buttonStyles.variant[variant]} ${buttonStyles.shadow[shadow]} ${buttonStyles.general} ${buttonStyles.transitions}`

  if (as === 'anchor') {
    return (
      <Link className={buttonClassNames} href="#" to={to} smooth offset={-64} duration={1000}>
        {children}
      </Link>
    )
  }

  return (
    <a className={buttonClassNames} href={href || '#'} {...props}>
      {children}
    </a>
  )
}
