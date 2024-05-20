import { render, screen } from '@testing-library/vue'
import ActionButton from '@/components/ActionButton.vue'
import { expect } from 'vitest'

describe('Main Navigation', () => {
  it('displays button name', () => {
    render(ActionButton, { props: { text: 'Clickme', type: 'primary' } })
    const actionButton = screen.getByRole('button')

    expect(actionButton).toBeInTheDocument()
  })

  it('displays company name', () => {
    render(ActionButton, { props: { text: 'Clickme', type: 'primary' } })
    const actionButton = screen.getByRole('button')

    expect(actionButton).toHaveClass('primary')
  })
})
