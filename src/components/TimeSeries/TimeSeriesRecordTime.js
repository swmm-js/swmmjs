import React from 'react';

  
function TimeSeriesRecordTime({data = {}, onUpdate, style = {}, timeseriesName, timeseriesRecordID}) {

  return (
    <>
      <label htmlFor={'TimeSeriesRecordTime'} style={{display: "block"}}>Time: 
        <input 
          type="text"
          name="TimeSeriesRecordTime"
          style={{margin: '5px'}}
          value={data.TIMESERIES[timeseriesName] === undefined 
            || data.TIMESERIES[timeseriesName][timeseriesRecordID] === undefined
            ? '' 
            :data.TIMESERIES[timeseriesName][timeseriesRecordID].Time}
          onInput={e=>onUpdate({...data}, data.TIMESERIES[timeseriesName][timeseriesRecordID].Time = e.target.value)}
        >
        </input>
      </label>
    </>
  )
}

export default TimeSeriesRecordTime;
