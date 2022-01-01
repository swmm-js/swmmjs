import React from 'react';

function DryStep({data = {}, onUpdate, style = {}}) {

  return (
    <>
      <label htmlFor={'DryStep'} style={{display: "block"}}>Dry Step: 
        <input 
          type="text"
          pattern="^\d{2}:\d{2}:\d{2}$"
          title="Format is HH:MM:SS (example: 01:30:00)"
          style={{margin: '5px'}}
          name="DryStep"
          value={(data.OPTIONS.DRY_STEP)}
          onChange={e=>onUpdate({...data}, data.OPTIONS.DRY_STEP = e.target.value)}
        >
        </input>
      </label>
    </>
  )
}

export default DryStep;