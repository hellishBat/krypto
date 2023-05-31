import {
  ReactNode,
  ReactElement,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
} from 'react'
import { LinkProps } from 'react-scroll'

export interface ChildrenTypes {
  children: ReactNode | ReactNode[]
}

export interface ButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'anchor' | 'button'
  kind: 'primary' | 'secondary' | 'download'
  variant?: 'lg' | 'default'
  shadow?: 'xl' | 'default'
  href?: string
  to?: LinkProps['to'] | any
}

export interface ContainerProps extends ChildrenTypes {
  variant?: 'default' | 'mobFluid'
}

export type WrapperProps = ChildrenTypes

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  id?: string
}

export interface SectionHeaderProps extends ChildrenTypes {
  className?: string
}

export interface TypographyProps extends ChildrenTypes {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'p'
  className?: string
}

export interface LogoProps {
  className?: string
}

export interface NavProps {
  navLinks: { to: string; label: string }[]
}

export interface LangProps {
  id: number
  flag: ReactElement
  abbr: string
  unavailable: boolean
}

export interface CountdownData {
  time: number
  text: string
}

export interface CountdownProps {
  countdownText: string
  countdownData: CountdownData[]
}

export interface HowToTabsProps {
  subheading: string
  data: {
    btnText: string
    mov: string
    img: string
  }[]
}

export interface VideoPlayerProps {
  data: {
    mov: string
    img: string
  }
}

export interface CryptoCardProps {
  data: {
    img: string
    title: string
    text: string
    price?: number
    btnText: string
  }
}

export interface FeaturesCardProps {
  data: {
    icon: ReactElement
    title: string
    description: string
  }
}

export interface TestimonialCardProps {
  data: {
    text: string
    img: string
    author: string
    position: string
  }
}

export interface UniversityCardProps {
  data: {
    img: string
    title: string
    text: string
    href: string
    linkText: string
  }
}

export interface HyperlinkItem {
  href: string
  label: string
}

export interface AnchorItem {
  to: string
  label: string
}

export interface FooterNavProps {
  as: 'hyperlink' | 'anchor'
  links: (HyperlinkItem | AnchorItem)[]
}

export interface CreditLink {
  href: string
  label: string
}

export interface FooterCreditsProps {
  links: CreditLink[]
}

export interface SocialLink {
  href: string
  icon: JSX.Element
}

export interface SocialLinksProps {
  data: SocialLink[]
}
