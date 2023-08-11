import type { ComponentMeta } from '@storybook/react'

import NewPostPage from './NewPostPage'

export const generated = () => {
  return <NewPostPage />
}

export default {
  title: 'Pages/NewPostPage',
  component: NewPostPage,
} as ComponentMeta<typeof NewPostPage>
