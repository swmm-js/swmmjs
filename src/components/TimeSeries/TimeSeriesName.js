import React from 'react';

function TimeSeriesName({data = {}, onUpdate, style = {}, timeseriesName}) {

  return (
    <>
      <label htmlFor={'TimeSeriesName'} style={{display: "block"}}>Name: 
        <input 
          type="text"
          name="TimeSeriesName"
          style={{margin: '5px'}}
          value={timeseriesName}
          readOnly 
          disabled
        >
        </input>
      </label>
    </>
  )
}

export default TimeSeriesName;
