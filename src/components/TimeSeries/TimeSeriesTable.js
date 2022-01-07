import { useState, useEffect } from 'react'
//import 'react-tabulator/lib/styles.css'
import { ReactTabulator } from 'react-tabulator'

// Working with TimeSeries is difficult because under the
// current data structure, all of the TimeSeries data is stored
// in a flat set. This structure is not great because it requires
// at least one search algorithm to operate. Instead, the structure
// should be hierarchical: 
//  Series <string>: 
//  [ 
//    {
//      Date <string>: optional
//      Time <string>: optional?
//      Value <number>: required
//    },
//  ]
function TimeSeriesTable({style={}, data={}, onUpdate=f=>f, timeseriesName}){

  return(
    <>
      <div>------------TIMESERIES RECORD-------------</div>
      <div>{'timeseriesRecord'}</div>
      {/*<ReactTabulator 
        data={data.TIMESERIES[timeseriesName]}
        tooltips={true}
        layout={'fitData'}
      />*/}
      <div>-------------------------------------------</div>
    </>
  )
}

export default TimeSeriesTable;