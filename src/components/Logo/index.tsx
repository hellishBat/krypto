import { Link } from 'react-scroll'
import { ProjectLogo } from '@/assets'
import type { LogoProps } from '@/types'

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link
      className={`h-8 w-[5.188rem] ${className || ''}`}
      to="heroSection"
      smooth={true}
      href="#"
      duration={1000}
    >
      <ProjectLogo width="100%" height="auto" />
    </Link>
  )
}
