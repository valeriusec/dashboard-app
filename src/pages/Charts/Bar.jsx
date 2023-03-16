import React from 'react'

import { Header } from '../../components'
import BarChart from '../../components/Charts/BarChart'

const Bar = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Bars' title='Olympic Medal Counts - RIO'/>
      <div className='w-full'>
        <BarChart />
      </div>
    </div>
  )
}

export default Bar