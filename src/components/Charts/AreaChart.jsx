import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, SplineAreaSeries, DateTime, Legend } from '@syncfusion/ej2-react-charts'

import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy'

import { useStateContext } from '../../contexts/ContextProvider'
 
const AreaChart = () => {
const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id='area-chart'
      height='420px'
      chartArea={{border: { width: 0 }}}
      primaryXAxis={areaPrimaryXAxis}
      primaryYAxis={areaPrimaryYAxis}
      tooltip={{enable: true}}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={
        currentMode === "Dark"
          ? {
              textStyle: {
                color: "#fff",
              },
            }
          : ""
      }
    >
      <Inject services={[SplineAreaSeries, DateTime, Legend]}/>
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default AreaChart