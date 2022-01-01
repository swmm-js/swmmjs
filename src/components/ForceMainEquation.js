import React from 'react';

function ForceMainEquation({data = {}, onUpdate, style = {}}) {

  var options = [
    'H-W',
    'D-W'
  ]

  return (
    <>
      <label htmlFor="ForceMainEquation" style={style}>Force Main Equation: 
        <select style={{margin: '5px'}}
          name="ForceMainEquation"
          value={data.OPTIONS.FORCE_MAIN_EQUATION}
          onChange={
            e=>onUpdate(
              {...data}, 
              data.OPTIONS.FORCE_MAIN_EQUATION = e.target.value
            )
          }
        >
          {options.map((option, i) => <option key={i} value={option}>{option}</option>)}
        </select>
      </label>
    </>
  )
}

export default ForceMainEquation;