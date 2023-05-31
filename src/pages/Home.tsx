// Home
import ContextProviders from '@/context/ContextProviders'
import Layout from '@/layouts'
import Hero from '@/modules/Hero'
// import HowTo from '@/modules/HowTo'
import Cryptos from '@/modules/Cryptos'
import Features from '@/modules/Features'
import Downloads from '@/modules/Downloads'
import Testimonials from '@/modules/Testimonials'
import University from '@/modules/University'

const Home = () => {
  return (
    <ContextProviders>
      <Layout>
        <Hero />
        {/* <HowTo /> */}
        <Cryptos />
        <Features />
        <Downloads />
        <Testimonials />
        <University />
      </Layout>
    </ContextProviders>
  )
}

export default Home
