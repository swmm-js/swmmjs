import * as React from 'react'
import {Line, XAxis, YAxis, CartesianGrid, LineChart} from 'recharts'

const columns = [
  { headerName: "ID", field: "id", visible: false},
  { headerName: "Date", field: "Date", width: 100, editable: true},
  { headerName: "Time", field: "Time", width: 100, editable: true},
  { headerName: "Value", field: "Value", width: 100, editable: true},
]

// When the table data is loaded in, it needs to be copied to a new
// table that uses keys and can be safely modified by the user.
export default function TimeSeriesTable({style={}, data = [], onUpdate=f=>f, timeseriesName}) {
  const newData = data.map((x, i) => {
    x.FullTime = x.Date + ' ' + x.Time
    x.id = i + 1
    return x
  })
  
  if( typeof data  !== 'undefined' )
  {
    return (
      <>
      <LineChart width={500} height={300} data={newData}>
        <XAxis dataKey='FullTime'/>
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type='monotone' dataKey='Value' stroke="#222222" />
      </LineChart>
      </>
  );
  } else {
    return (<></>)
  }
}

