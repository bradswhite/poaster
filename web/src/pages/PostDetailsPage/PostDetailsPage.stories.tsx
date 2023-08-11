import type { ComponentMeta } from '@storybook/react'

import PostDetailsPage from './PostDetailsPage'

export const generated = () => {
  return <PostDetailsPage />
}

export default {
  title: 'Pages/PostDetailsPage',
  component: PostDetailsPage,
} as ComponentMeta<typeof PostDetailsPage>
