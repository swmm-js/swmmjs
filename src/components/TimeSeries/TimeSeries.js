import { useState, useEffect } from 'react'
import TimeSeriesName from './TimeSeriesName';
import TimeSeriesRecordIterator from './TimeSeriesRecordIterator'
import TimeSeriesTable from './TimeSeriesTable';
import TimeSeriesChart from './TimeSeriesChart'

// Cycling through TimeSeries entries is probably
// not the best way to go, but for simple interfaces
// and educational purposes, a little iterator is
// a good idea. For heavier purposes, it is a good idea
// to use TimeSeriesTable.

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
function TimeSeries({style={}, data={}, onUpdate=f=>f}){
  const [timeseriesID, setTimeseriesID] = useState(Object.keys(data.TIMESERIES)[0]);

  useEffect(() => {
    setTimeseriesID(Object.keys(data.TIMESERIES)[0])
  }, [data.TIMESERIES])

  // Use this function to update the timeseries object.
  function updateTimeseries(seriesData){
    onUpdate({...data}, data.TIMESERIES[timeseriesID] = seriesData)
    console.log(data)
  }

  
  function nextID(){
    let keys = Object.keys(data.TIMESERIES);
    if(keys.indexOf(timeseriesID) < keys.length - 1){
      let nextIndex = keys.indexOf(timeseriesID) + 1;
      setTimeseriesID(keys[nextIndex]);
    }
  }

  // Same here.
  function prevID(){
    let keys = Object.keys(data.TIMESERIES);
    if(keys.indexOf(timeseriesID) > 0){
      let nextIndex = keys.indexOf(timeseriesID) - 1;
      setTimeseriesID(keys[nextIndex]);
    }
  }

  return(
    <>
      <div>------------TIMESERIES-------------</div>
      <div>{timeseriesID}</div>
      <TimeSeriesName data={data} onUpdate={onUpdate} style={style} timeseriesName={timeseriesID} />
      
      <TimeSeriesChart data={data.TIMESERIES[timeseriesID]} onUpdate={updateTimeseries} style={style} timeseriesName={timeseriesID} />
      
      <TimeSeriesTable data={data.TIMESERIES[timeseriesID]} onUpdate={updateTimeseries} style={style} timeseriesName={timeseriesID} />
      
      <button onClick={prevID}>Prev</button>
      <button onClick={nextID}>Next</button>
    </>
  )
}

export default TimeSeries;