import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Pie } from './Pie'

export default {
  title: 'Example/chart-echarts/Pie',
  component: Pie,
} as ComponentMeta<typeof Pie>

const Template: ComponentStory<typeof Pie> = (args) => <Pie {...args} />

export const BaseTestChart = Template.bind({})
BaseTestChart.args = {
  data: [
    { value: 1048, name: '搜索引擎' },
    { value: 735, name: '直接访问' },
    { value: 580, name: '邮件营销' },
    { value: 484, name: '联盟广告' },
    { value: 300, name: '视频广告' },
  ],
}
