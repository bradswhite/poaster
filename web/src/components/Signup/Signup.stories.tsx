// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Signup> = (args) => {
//   return <Signup {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Signup from './Signup'

export const generated = () => {
  return <Signup />
}

export default {
  title: 'Components/Signup',
  component: Signup,
} as ComponentMeta<typeof Signup>
