import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/MainNav.vue'
import userEvent from '@testing-library/user-event'

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
  describe('When User logs in', () => {
    it('should display user profile', async () => {
      render(MainNav)

      const profileImage = screen.queryByRole('img', {
        name: /user profile image/i
      })

      expect(profileImage).not.toBeInTheDocument()

      const loginButton = screen.queryByRole('button', {
        name: /sign in/i
      })

      userEvent.click(loginButton)

      screen.queryByRole('img', {
        name: /user profile image/i
      })
      expect(profileImage).not.toBeInTheDocument()
    })
  })
})
