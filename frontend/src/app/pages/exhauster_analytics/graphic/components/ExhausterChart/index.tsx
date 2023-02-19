import { linearGradientDef } from '@nivo/core'
import { ResponsiveLine, Serie } from '@nivo/line'
import { mockData } from './mock'


type Props = {
  data?: Serie[]
}

export const ExhausterChart = ({ data }: Props) => (
  <ResponsiveLine
    data={mockData}
    curve="monotoneX"
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear',
      min: 'auto',
      max: 'auto',
      stacked: true,
      reverse: false
    }}
    yFormat=" >-.2f"
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'transportation',
      legendOffset: 36,
      legendPosition: 'middle'
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'count',
      legendOffset: -40,
      legendPosition: 'middle'
    }}
    colors={{ scheme: 'category10' }}
    enablePoints={false}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={0}
    useMesh={true}
    legends={[
      {
        anchor: 'top-right',
        direction: 'row',
        justify: false,
        translateX: 72,
        translateY: -31,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
    enableArea={true}

    defs={[
      linearGradientDef('gradientA', [
        { offset: 0, color: 'inherit' },
        { offset: 100, color: 'inherit', opacity: 0 },
      ]),
    ]}
    fill={[{ match: '*', id: 'gradientA' }]}
  />
)
