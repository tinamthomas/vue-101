import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/MainNav.vue'

describe('Main Navigation', () => {
  it('displays company name', () => {
    render(MainNav)
    const companyName = screen.getByText('Bobo Careers')

    expect(companyName.textContent).toContain('Bobo Careers')
  })
})
