import Link from 'next/link'
import { AccountCircle, Email, Lock } from 'styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormLink, FormWrapper } from 'components/Form'

const FormSignUp = () => (
  <FormWrapper>
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

      <FormLink>
        Already have an account?{' '}
        <Link href="/sign-in">
          <a>Sign in</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignUp
