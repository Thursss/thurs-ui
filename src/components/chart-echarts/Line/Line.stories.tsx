import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Line } from './Line'

export default {
  title: 'Example/chart-echarts/Line',
  component: Line,
} as ComponentMeta<typeof Line>

const Template: ComponentStory<typeof Line> = (args) => <Line {...args} />

export const BaseLine = Template.bind({})
BaseLine.args = {
  data: [150, 230, 224, 218, 135, 147, 260],
}
