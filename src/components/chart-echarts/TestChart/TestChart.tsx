import { useRef, useEffect } from 'react'
import { ECharts, init } from 'echarts'
import styled from 'styled-components'
import { type } from 'os'

interface TestChartProps {
  option?: object
  title?: string
  subtext?: string
  outRadius?: string
  inRadius?: string
  showShadow?: boolean
  shadowColor?: string
  showTooltip?: boolean
  legendAlign?: legendAlignProp
  data: object[]
}

type legendAlignProp = 'left' | 'right'

const Styles = styled.div`
  height: 500px;
  width: 500px;
`

export const TestChart = ({
  option,
  title,
  subtext,
  outRadius = '50%',
  inRadius = '0%',
  data,
  showShadow = true,
  showTooltip = true,
  legendAlign = 'left',
  shadowColor = 'rgba(0, 0, 0, 0.5)',
}: TestChartProps) => {
  const divRef = useRef<HTMLDivElement>(null)
  const chartRef = useRef<ECharts>()
  useEffect(() => {
    chartRef.current = init(divRef.current)
    chartRef.current.setOption(
      option || {
        title: {
          text: title,
          subtext: subtext,
          left: 'center',
        },
        tooltip: showTooltip
          ? {
              trigger: 'item',
            }
          : null,
        legend: {
          orient: 'vertical',
          left: legendAlign,
        },
        series: [
          {
            type: 'pie',
            radius: [inRadius, outRadius],
            data: data,
            emphasis: showShadow
              ? {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: shadowColor,
                  },
                }
              : {},
          },
        ],
      }
    )
  }, [
    option,
    title,
    subtext,
    outRadius,
    inRadius,
    data,
    showShadow,
    showTooltip,
    legendAlign,
    shadowColor,
  ])

  return <Styles ref={divRef}></Styles>
}
