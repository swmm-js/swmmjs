import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useEffect, useState } from 'react'

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
    x.id = i + 1
    return x
  })

  const [tableData, setTableData] = useState(newData);

  useEffect(() => {
    if( Array.isArray(data) )
    {
      const newData = data.map((x, i) => {
        x.id = i + 1
        return x
      })
      setTableData(newData)
    }
  }, [data])

  const handleCommit = (e:GridCellEditCommitParams) => {
    const array = data.map(r=>{
      if(r.id === e.id){
        return {...r, [e.field]:e.value}
      } else {
        return {...r}
      }
    })

    onUpdate(array)
  }
  
  if( typeof data  !== 'undefined' )
  {
    return (
      <>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          onCellEditCommit={handleCommit}
          rows={ tableData }
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
      </>
  );
  } else {
    return (<></>)
  }
}

