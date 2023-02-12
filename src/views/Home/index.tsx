import { InvestmentImage } from '../../components/investmentImage/investmentImage'
import { Container, HeroContainer } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <HeroContainer>
        <InvestmentImage />
        <h1>How much time does it cost?</h1>
        <h2> Discover how many hours you need to work to buy that desirable product</h2>
      </HeroContainer>
    </Container>
  )
}

export default Home
