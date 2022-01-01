/*
1: get data into a JSON object.
2:  for each element:
      if there is an element that is H hours behind:
        VALUE = x[now] - x[H hours previous]
        6 hours previous means x[8:05] - x[2:05].
      if there is no element that is H hours behind:
        No entry.
    for each resulting VALUE element:
      find the time of maximum VALUE (maxTIME).
    get the new START time by subtracting H hours from maxTIME.
    for every element from START to maxTIME:
      VALUE2 = VALUE[now] - $VALUE$[START]
    for every VALUE2:
      RESULT = VALUE2[now]/$VALUE$2[maxTIME]
*/

// Creates an NCRS SCS function
function funcx(data, type, duration, model, onUpdate) {
  // Select only elements that start 'duration' hours after the beginning
  const newStartSet = data[type].filter((v) => {
    return v.time >= duration
    }
  )

  // sort both sets and iterate by index to:
  //  VALUE = newStartSet[x] - data[type][x]
  // make sure it doesn't try to make values on non-matches.
  const newValSet = newStartSet.map((el, i) => ({
    time: el.time, frac: el.frac - data[type][i].frac
  }))

  // Get the maximum value and time of that value from newStartSet
  const maxVal = newValSet.reduce((accumulator, currentValue) => {
    const max = Math.max(currentValue.frac, accumulator[0]);
    let time = accumulator[1];
    // If that max value is greater than the previous value,
    // return the time of the max value and the 
    if (max > accumulator[0]){
      time = currentValue.time;
    }
    return [
      Math.max(currentValue.frac, accumulator[0]),
      time
    ];
  }, [Number.MIN_VALUE, 0])

  // Get the new START time by subtracting H hours from maxTIME.
  let newStartTime = maxVal[1] - duration;

  let valAtNewStart = data[type][data[type].findIndex((el)=>{return el.time === newStartTime})].frac;
  // VALUE2 = VALUE[now] - $VALUE$[newSTART]
  const val2Set = data[type].map((el, i) => ({
    time: el.time, frac: el.frac - valAtNewStart
  }))

  // For every VALUE2:
  // RESULT = VALUE2[now]/$VALUE$2[maxTIME]
  let val2atMaxTime = val2Set[val2Set.findIndex((el)=>{return el.time === maxVal[1]})].frac;

  const preconditionSet = val2Set.map((el, i) => ({
    time: el.time, frac: el.frac / val2atMaxTime
  }))

  // This is the final resultset.  This needs to be translated into
  // something that will fit into the raingage data structure and then
  // exported.
  const resultSet = preconditionSet.filter((v) => {
    return v.time >= newStartTime && v.time <= maxVal[1]
  })

  // So, this thing just returns that structure, but it should really
  // return something that looks more like the raingage structure,
  // which doesn't exist yet, so I need to implement raingages and
  // rainfall patterns.

 /* So, let the user select the type and duration.
    Have the user name the NEW gage and the NEW timeseries.
    run the algorithm.
    Translate the results to a raingage and timeseries object set.
    place the timeseries and the raingages into a object or model?
    Return the object(s) and update the model using the returned objects.
  */
  let modelUp = { RAINGAGES: {}, TIMESERIES: [] }
  modelUp.RAINGAGES = {
    "swmmjsRG": {
      "Format": "CUMULATIVE",
      "Interval": "0:06",
      "SCF": "1.0",
      "Source": "TIMESERIES",
      "SeriesName": "swmmjsTS",
      "Description": ""
    }
  }

  modelUp.TIMESERIES = resultSet.reduce((map, obj, i) => 
    {map[i] = {"TimeSeries": "swmmjsTS","Date": "","Time": String(obj.time),"Value": String(obj.frac)}; return map;}, [] );

  let newSeries = [...model.TIMESERIES, ...modelUp.TIMESERIES]
  let newGages  = {...model.RAINGAGES, ...modelUp.RAINGAGES}
  onUpdate({...model}, model.TIMESERIES = newSeries)
  onUpdate({...model}, model.RAINGAGES = newGages)
  onUpdate({...model}, {...model})

  return;
}

export default funcx;

 