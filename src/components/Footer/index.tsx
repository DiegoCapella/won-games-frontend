import Link from 'next/link'

import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact us
        </Heading>
        <a href="mailto:diegocapelladev@gmail.com">diegocapelladev@gmail.com</a>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>

        <nav>
          <a
            href="https://www.instagram.com/diegocapelladev"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://twitter.com/diego_capella"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>

          <a
            href="https://www.linkedin.com/in/diego-capella/"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://www.facebook.com/diegocapelladev.web"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>

        <nav id="resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-label="contact">
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games 2022 &copy; All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
