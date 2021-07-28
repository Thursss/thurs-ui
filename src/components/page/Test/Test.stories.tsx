import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Test } from './Test'

export default {
  title: 'Page/Test',
  component: Test,
} as ComponentMeta<typeof Test>

const Template: ComponentStory<typeof Test> = (args) => <Test {...args} />

export const TestHook = Template.bind({})
LoggedIn.args = {}
