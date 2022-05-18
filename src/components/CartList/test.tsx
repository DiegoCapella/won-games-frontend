import { screen } from '@testing-library/react'

import CartList from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'
import mockItems from './mock'

describe('<CardList />', () => {
  it('should render the cart list', () => {
    renderWithTheme(<CartList items={mockItems} total="R$ 330,00" />)

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 330,00')).toHaveStyle({ color: '#F231A5' })
  })
})
