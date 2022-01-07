import React from 'react';

  
function TimeSeriesRecordDate({data = {}, onUpdate, style = {}, timeseriesName, timeseriesRecordID}) {

  return (
    <>
      <label htmlFor={'TimeseriesRecordDate'} style={{display: "block"}}>Date: 
        <input 
          type="text"
          name="TimeseriesRecordDate"
          style={{margin: '5px'}}
          value={data.TIMESERIES[timeseriesName] === undefined 
            || data.TIMESERIES[timeseriesName][timeseriesRecordID] === undefined
            ? '' 
            :data.TIMESERIES[timeseriesName][timeseriesRecordID].Date}
          onInput={e=>onUpdate({...data}, data.TIMESERIES[timeseriesName][timeseriesRecordID].Date = e.target.value)}
        >
        </input>
      </label>
    </>
  )
}

export default TimeSeriesRecordDate;
