import { useRef, useEffect } from 'react'
import { ECharts, init } from 'echarts'
import styled from 'styled-components'

import { BaseEChartOptionProps } from '../../../common/chartType'

const Styles = styled.div`
  height: 600px;
  width: 600px;
`
interface LineChartProps extends BaseEChartOptionProps {
  showYaxis?: boolean
  showXaxis?: boolean
  boundaryGap?: boolean
  smooth?: boolean
  showXaxisData?: string[]
}

export const Line = ({
  option,
  showYaxis = true,
  showXaxis = true,
  boundaryGap = false,
  smooth = true,
  showXaxisData = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  data,
}: LineChartProps) => {
  const divRef = useRef<HTMLDivElement>(null)
  const chartRef = useRef<ECharts>()
  useEffect(() => {
    chartRef.current = init(divRef.current)
    chartRef.current.setOption(
      option || {
        tooltip: {
          trigger: 'axis',
        },
        xAxis: {
          type: 'category',
          boundaryGap: boundaryGap,
          data: showXaxisData,
          show: showXaxis,
        },
        yAxis: {
          type: 'value',
          show: showYaxis,
        },
        series: [
          {
            type: 'line',
            data: data,
            areaStyle: {},
            smooth: smooth,
          },
        ],
      }
    )
  }, [option, showYaxis, showXaxis, boundaryGap, showXaxisData])
  return <Styles ref={divRef}></Styles>
}
