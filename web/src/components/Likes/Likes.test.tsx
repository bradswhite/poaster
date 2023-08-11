import { render } from '@redwoodjs/testing/web'

import Likes from './Likes'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Likes', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Likes />)
    }).not.toThrow()
  })
})
