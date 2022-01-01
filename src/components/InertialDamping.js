import React from 'react';

function InertialDamping({data = {}, onUpdate, style = {}}) {

  var options = [
    'NONE', 
    'PARTIAL',
    'FULL'
  ]

  return (
    <>
      <label htmlFor="InertialDamping" style={style}>Inertial Damping: 
        <select style={{margin: '5px'}}
          name="InertialDamping"
          value={data.OPTIONS.INERTIAL_DAMPING}
          onChange={
            e=>onUpdate(
              {...data}, 
              data.OPTIONS.INERTIAL_DAMPING = e.target.value
            )
          }
        >
          {options.map((option, i) => <option key={i} value={option}>{option}</option>)}
        </select>
      </label>
    </>
  )
}

export default InertialDamping;