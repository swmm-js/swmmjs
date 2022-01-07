import React from 'react';

  
function TimeSeriesRecordValue({data = {}, onUpdate, style = {}, timeseriesName, timeseriesRecordID}) {

  return (
    <>
      <label htmlFor={'TimeSeriesRecordValue'} style={{display: "block"}}>Value: 
        <input 
          type="number"
          name="TimeSeriesRecordValue"
          style={{margin: '5px'}}
          value={data.TIMESERIES[timeseriesName] === undefined 
            || data.TIMESERIES[timeseriesName][timeseriesRecordID] === undefined
            ? '' 
            :data.TIMESERIES[timeseriesName][timeseriesRecordID].Value}
          onInput={e=>onUpdate({...data}, data.TIMESERIES[timeseriesName][timeseriesRecordID].Value = e.target.value)}
        >
        </input>
      </label>
    </>
  )
}

export default TimeSeriesRecordValue;
