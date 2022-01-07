import { useState, useEffect } from 'react'
import TimeSeriesRecordDate from './TimeSeriesRecordDate';
import TimeSeriesRecordTime from './TimeSeriesRecordTime';
import TimeSeriesRecordValue from './TimeSeriesRecordValue';
import TimeSeriesTable from './TimeSeriesTable';

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
function TimeSeriesRecordIterator({style={}, data={}, onUpdate=f=>f, timeseriesName}){
  const [timeseriesRecord, setTimeseriesRecord] = useState(
    typeof data.TIMESERIES[timeseriesName] !== 'undefined' 
    ? Object.keys(data.TIMESERIES[timeseriesName])[0]
    : ''
  );

  useEffect(() => {
    // If there is no timeseries by this name, show nothing.
    // Should maybe also make the components disabled?
    if(typeof data.TIMESERIES[timeseriesName] !== 'undefined'){
      setTimeseriesRecord(Object.keys(data.TIMESERIES[timeseriesName])[0])
    } else {
      setTimeseriesRecord('')
    }
  }, [data.TIMESERIES, timeseriesName])

  
  function nextID(){
    let keys = Object.keys(data.TIMESERIES[timeseriesName]);
    if(keys.indexOf(timeseriesRecord) < keys.length - 1){
      let nextIndex = keys.indexOf(timeseriesRecord) + 1;
      setTimeseriesRecord(keys[nextIndex]);
    }
  }

  // Same here.
  function prevID(){
    let keys = Object.keys(data.TIMESERIES[timeseriesName]);
    if(keys.indexOf(timeseriesRecord) > 0){
      let nextIndex = keys.indexOf(timeseriesRecord) - 1;
      setTimeseriesRecord(keys[nextIndex]);
    }
  }

  return(
    <>
      <div>------------TIMESERIES RECORD-------------</div>
      <div>{timeseriesRecord}</div>
      {/*<TimeSeriesTable
        data={data} 
        onUpdate={onUpdate} 
        style={style} 
        timeseriesName={timeseriesName} 
      />*/}
      <TimeSeriesRecordDate 
        data={data} 
        onUpdate={onUpdate} 
        style={style} 
        timeseriesName={timeseriesName} 
        timeseriesRecordID={timeseriesRecord}
      />
      <TimeSeriesRecordTime 
        data={data} 
        onUpdate={onUpdate} 
        style={style} 
        timeseriesName={timeseriesName} 
        timeseriesRecordID={timeseriesRecord}
      />
      <TimeSeriesRecordValue 
        data={data} 
        onUpdate={onUpdate} 
        style={style} 
        timeseriesName={timeseriesName} 
        timeseriesRecordID={timeseriesRecord}
      />
      
      <div>
      <button onClick={prevID}>Prev</button>
      <button onClick={nextID}>Next</button>
      </div>
      <div>-------------------------------------------</div>
    </>
  )
}

export default TimeSeriesRecordIterator;