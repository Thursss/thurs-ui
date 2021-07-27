import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TestChart } from './TestChart'

export default {
  title: 'Example/chart-echarts/TestChart',
  component: TestChart,
} as ComponentMeta<typeof TestChart>

const Template: ComponentStory<typeof TestChart> = (args) => <TestChart {...args} />

export const BaseTestChart = Template.bind({})
BaseTestChart.args = {
  title: '用户访问来源',
  data: [
    { value: 1048, name: '搜索引擎' },
    { value: 735, name: '直接访问' },
    { value: 580, name: '邮件营销' },
    { value: 484, name: '联盟广告' },
    { value: 300, name: '视频广告' }
  ]
}
