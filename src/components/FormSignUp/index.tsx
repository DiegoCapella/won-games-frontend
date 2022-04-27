import Link from 'next/link'
import { AccountCircle, Email, Lock } from 'styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'
import * as S from './styles'

const FormSignUp = () => (
  <S.Wrapper>
    <form>
      <TextField
        name="username"
        placeholder="Username"
        type="text"
        icon={<AccountCircle />}
      />
      <TextField
        name="email"
        placeholder="Email"
        type="text"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <TextField
        name="confirm_password"
        placeholder="Confirm password"
        type="password"
        icon={<Lock />}
      />

      <Button type="submit" size="large" fullWidth>
        <span>Sign up now</span>
      </Button>

      <S.FormLink>
        Already have an account?{' '}
        <Link href="/sign-in">
          <a>Sign in</a>
        </Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignUp
