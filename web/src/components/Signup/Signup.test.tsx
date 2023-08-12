import { render } from '@redwoodjs/testing/web'

import Signup from './Signup'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Signup', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Signup />)
    }).not.toThrow()
  })
})
