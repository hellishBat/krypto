// Home
import { useEffect } from 'react'
import ContextProviders from '@/context/ContextProviders'
import Layout from '@/layouts/Layout'
import setDynamicVH from '@/utils/setDynamicVH'
import LogoWebpack from '@/assets/images/svg/webpack.svg'
import LogoReact from '@/assets/images/svg/react.svg'
import LogoTW from '@/assets/images/svg/tailwind.svg'
import LogoTS from '@/assets/images/svg/ts.svg'

const Home = () => {
  useEffect(() => {
    window.addEventListener('load', setDynamicVH)
    window.addEventListener('resize', setDynamicVH)

    return () => {
      window.removeEventListener('load', () => setDynamicVH)
      window.removeEventListener('resize', () => setDynamicVH)
    }
  }, [])

  return (
    <ContextProviders>
      <Layout>
        <section className="py-16">
          <div className="container">
            <h1 className="flex justify-center items-center text-4xl font-medium">
              <LogoWebpack className="mr-2" /> Webpack Boilerplate (<LogoReact className="mr-2" />
              React <LogoTS className="mx-2" /> TypeScript + <LogoTW className="mr-2" /> Tailwind
              CSS)
            </h1>
          </div>
        </section>
      </Layout>
    </ContextProviders>
  )
}

export default Home
