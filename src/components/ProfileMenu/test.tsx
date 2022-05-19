import { screen } from '@testing-library/react'

import ProfileMenu from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'

describe('<ProfileMenu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<ProfileMenu />)

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /my cards/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /my orders/i })).toBeInTheDocument()
  })
})
