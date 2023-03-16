import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip, TrackLineSettings } from '@syncfusion/ej2-react-charts'


export default class SparkLine extends React.PureComponent 
{
  render () 
  {
    const { id, type, height, width, data, currentColor, color } = this.props;

    return <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType='Numeric'
      fill={color}
      border={{color: currentColor, width: 2}}
      dataSource={data}
      xName='x'
      yName='yval'
      type={type}
      tooltipSettings={{
        visible: true,
        format: 'x: ${x} , y: ${yval}',
        TrackLineSettings: { visible: true },
        trackLineSettings: { visible: true},
      }}
    >
      <Inject services={[SparklineTooltip]}/>
    </SparklineComponent>
  }
}