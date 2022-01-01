import React from 'react';

function SkipSteadyState({data = {}, onUpdate = f => f, style = {}}) {

  var options = [
    'YES', 
    'NO'
  ]

  return (
    <>
      <label htmlFor="SkipSteadyState" style={style}>Skip Steady State: 
        <select 
          style={{margin: '5px'}}
          name="SkipSteadyState"
          value={data.OPTIONS.SKIP_STEADY_STATE}
          onChange={e=>onUpdate({...data}, data.OPTIONS.SKIP_STEADY_STATE = e.target.value)}
        >
          {options.map((option, i) => <option key={i} value={option}>{option}</option>)}
        </select>
      </label>
    </>
  )
}

export default SkipSteadyState;