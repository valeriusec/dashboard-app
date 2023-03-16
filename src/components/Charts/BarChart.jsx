import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, DateTime, Legend, DataLabel, Category } from '@syncfusion/ej2-react-charts'

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy'

import { useStateContext } from '../../contexts/ContextProvider'
 
const AreaChart = () => {
const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id='bar-chart'
      height='420px'
      chartArea={{border: { width: 0 }}}
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
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
      <Inject services={[ColumnSeries, DateTime, Legend, DataLabel, Category]}/>
      <SeriesCollectionDirective>
        {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default AreaChart