// Footer
import Container from '@/components/Container'
import IconHeart from '@/assets/images/svg/heart.svg'

const Footer = () => {
  return (
    <footer className="py-8">
      <Container>
        <div className="flex justify-center items-center gap-2">
          <span>Coded with</span>
          <IconHeart />
          <span>by Valentine Samoylov</span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
