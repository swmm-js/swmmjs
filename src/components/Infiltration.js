import React from 'react';

function Infiltration({data = {}, onUpdate, style = {}}) {

  var options = [
    'HORTON', 
    'MOD_HORTON',
    'GREEN_AMPT',
    'MOD_GREEN_AMPT',
    'CURVE_NUMBER'
  ]

  return (
    <>
      <label htmlFor="Infiltration" style={style}>Infiltration: 
        <select style={{margin: '5px'}}
          name="Infiltration"
          value={data.OPTIONS.INFILTRATION}
          onChange={e=>onUpdate({...data}, data.OPTIONS.INFILTRATION = e.target.value)}
        >
          {options.map((option, i) => <option key={i} value={option}>{option}</option>)}
        </select>
      </label>
    </>
  )
}

export default Infiltration;