import React from 'react';

function FlowUnits({data = {}, onUpdate, style = {}}) {
  
  var options = [
    'CFS',                             // cubic feet per second
    'GPM',                             // gallons per minute
    'MGD',                             // million gallons per day
    'CMS',                             // cubic meters per second
    'LPS',                             // liters per second
    'MLD'                              // million liters per day
  ];

  return (
    <>
      <label htmlFor="FlowUnits" style={style}>Flow Units: 
          <select 
          style={{margin: '5px'}}
          name="FlowUnits"
          value={data.OPTIONS.FLOW_UNITS}
          onChange={e=>onUpdate({...data}, data.OPTIONS.FLOW_UNITS = e.target.value)}
        >
          {options.map((option, i) => <option key={i} value={option}>{option}</option>)}
        </select>
      </label>
    </>
    )
}

export default FlowUnits;
