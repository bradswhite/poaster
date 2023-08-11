import { render } from '@redwoodjs/testing/web'

import PostDetailsPage from './PostDetailsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PostDetailsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PostDetailsPage />)
    }).not.toThrow()
  })
})
