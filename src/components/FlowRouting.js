import React from 'react';

function FlowRouting({data = {}, onUpdate, style = {}}) {
  
  var RouteModelType = [
    'NONE',
    'STEADY',
    'KINWAVE',
    'XKINWAVE',
    'DYNWAVE'
  ];

  return (
    <>
      <label htmlFor="FlowRouting" style={style}>Flow Routing: 
          <select
          style={{margin: '5px'}}
          name="FlowRouting"
          value={data.OPTIONS.FLOW_ROUTING}
          onChange={e=>onUpdate({...data}, data.OPTIONS.FLOW_ROUTING = e.target.value)}
        >
          {RouteModelType.map((option, i) => <option key={i} value={option}>{option}</option>)}
        </select>
      </label>
    </>
  )
}

export default FlowRouting;
