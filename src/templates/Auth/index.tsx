import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const currentYear = new Date().getFullYear()

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Logo />

      <Heading color="white">All your favorite games in one place</Heading>
      <S.Subtitle>
        <strong>WON</strong> is the best and most complete gaming platform.
      </S.Subtitle>

      <S.Footer>
        Won Games {currentYear} © Todos os Direitos Reservados
      </S.Footer>
    </S.BannerBlock>

    <S.Content>
      <Logo color="black" size="large" />

      <Heading color="black" lineColor="secondary" lineLeft>
        {title}
      </Heading>
      {children}
    </S.Content>
  </S.Wrapper>
)

export default Auth