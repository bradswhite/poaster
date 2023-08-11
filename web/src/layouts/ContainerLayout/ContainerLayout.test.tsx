import { render } from '@redwoodjs/testing/web'

import ContainerLayout from './ContainerLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ContainerLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContainerLayout />)
    }).not.toThrow()
  })
})
