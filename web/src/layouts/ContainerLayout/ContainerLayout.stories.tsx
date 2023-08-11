import type { ComponentMeta, ComponentStory } from '@storybook/react'

import ContainerLayout from './ContainerLayout'

export const generated: ComponentStory<typeof ContainerLayout> = (args) => {
  return <ContainerLayout {...args} />
}

export default {
  title: 'Layouts/ContainerLayout',
  component: ContainerLayout,
} as ComponentMeta<typeof ContainerLayout>
