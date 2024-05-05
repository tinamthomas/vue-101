import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/MainNav.vue'

describe('Main Navigation', () => {
  it('displays company name', () => {
    render(MainNav)
    const companyName = screen.getByText('Bobo Careers')

    expect(companyName.textContent).toContain('Bobo Careers')
  })
  it('should display menu items for navigation', () => {
    render(MainNav)
    const navigationMenuItems = screen.getAllByRole('listitem').map((item) => item.textContent)
    expect(navigationMenuItems).toEqual([
      'Teams',
      'Locations',
      'Life at Bobo Corp',
      'How we hire',
      'Jobs'
    ])
  })
})
