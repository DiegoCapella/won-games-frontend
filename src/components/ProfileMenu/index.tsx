import Link from 'next/link'
import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from 'styled-icons/material-outlined'
import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <Link href="/profile/me" passHref>
      <S.Link isActive={activeLink === '/profile/me'} title="My profile">
        <AccountCircle size={24} />
      </S.Link>
    </Link>

    <Link href="/profile/cards" passHref>
      <S.Link isActive={activeLink === '/profile/cards'} title="My cards">
        <CreditCard size={24} />
      </S.Link>
    </Link>

    <Link href="/profile/orders" passHref>
      <S.Link isActive={activeLink === '/profile/orders'} title="My orders">
        <FormatListBulleted size={24} />
      </S.Link>
    </Link>

    <Link href="/sign-out" passHref>
      <S.Link>
        <ExitToApp size={24} />
      </S.Link>
    </Link>
  </S.Nav>
)

export default ProfileMenu