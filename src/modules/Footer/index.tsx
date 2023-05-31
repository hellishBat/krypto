// Facebook
import { Container, Logo, Typography } from '@/components'
import { FooterNav, SocialLinks, Newsletter, FooterCredits } from './components'
import data from '@/data/index.json'
import {
  IconHeart,
  IconSocialFacebook,
  IconSocialTwitter,
  IconSocialYoutube,
  IconSocialTikTok,
} from '@/assets'

const { footer } = data

const socialIcons = [
  { icon: <IconSocialFacebook title="Facebook Community" /> },
  { icon: <IconSocialTwitter title="Twitter Page" /> },
  { icon: <IconSocialYoutube title="YouTube Channel" /> },
  { icon: <IconSocialTikTok title="TikTok Channel" /> },
]

const socialLinks = footer.social.links.map((item, idx) => ({
  ...item,
  icon: socialIcons[idx].icon,
}))

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy pb-16 pt-14 text-xs text-white md:pb-20 md:pt-16 lg:pb-24 lg:pt-20">
      <Container>
        <div className="divide-y divide-white/20">
          <div className="flex flex-col flex-wrap gap-8 pb-14 sm:max-w-none sm:flex-row sm:items-start sm:text-left md:pb-16 lg:flex-nowrap lg:pb-20">
            <div className="sm:max-w-[16rem]">
              <Logo className="mb-5 md:mb-8" />
              <p className="text-lg">{footer.text}</p>
            </div>

            <div className="flex flex-wrap gap-8 sm:flex-nowrap">
              <div className="md:min-w-[10rem]">
                <Typography as="h4">{footer.anchors.heading}</Typography>
                <FooterNav as="anchor" links={footer.anchors.links} />
              </div>

              <div className="md:min-w-[10rem]">
                <Typography as="h4">{footer.legal.heading}</Typography>
                <FooterNav as="hyperlink" links={footer.legal.links} />
              </div>
            </div>

            <div className="lg:ml-auto">
              <Typography as="h4">{footer.newsletter.heading}</Typography>
              <Typography className="mb-6 md:text-xl " as="p">
                {footer.newsletter.subheading}
              </Typography>
              <Newsletter />
            </div>
          </div>

          <div className="pt-5">
            <div className="flex flex-col flex-wrap items-center gap-4 sm:flex-row md:justify-between">
              <FooterCredits links={footer.credits.links} />

              <SocialLinks data={socialLinks} />

              <div className="flex flex-wrap items-center justify-center gap-1 ">
                <span>{footer.copyright.text[0]}</span>
                <IconHeart />
                <span>{footer.copyright.text[1]}</span>
                <a
                  className="flex items-center transition-colors lg:hover:text-red-500 lg:hover:underline"
                  href={footer.copyright.link}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  {footer.copyright.text[2]}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
