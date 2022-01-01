import React from 'react';

function SweepEnd({data = {}, onUpdate, style = {}}) {

  return (
    <>
      <label htmlFor={'SweepEnd'} style={{display: "block"}}>Sweep End: 
        <input 
          type="text"
          pattern="^\d{1,2}\/\d{1,2}$"
          title="Format is mm/dd (example: 1/25)"
          style={{margin: '5px'}}
          name="SweepEnd"
          value={data.OPTIONS.SWEEP_END?data.OPTIONS.SWEEP_END:''}
          onChange={e=>onUpdate({...data}, data.OPTIONS.SWEEP_END = e.target.value)}
        >
        </input>
      </label>
    </>
  )
}

export default SweepEnd;