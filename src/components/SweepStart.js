import React from 'react';

function SweepStart({data = {}, onUpdate, style = {}}) {

  return (
    <>
      <label htmlFor={'SweepStart'} style={{display: "block"}}>Sweep Start: 
        <input 
          type="datetime"
          name="SweepStart"
          style={{margin: '5px'}}
          value={(data.OPTIONS.SWEEP_START?data.OPTIONS.SWEEP_START:'')}
          onChange={e => onUpdate({...data}, data.OPTIONS.SWEEP_START = e.target.value)}
        >
        </input>
      </label>
    </>
  )
}

export default SweepStart;