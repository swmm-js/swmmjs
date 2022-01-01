import React from 'react';

function WetStep({data = {}, onUpdate, style = {}}) {

  return (
    <>
      <label htmlFor={'WetStep'} style={{display: "block"}}>Wet Step: 
        <input 
          type="text"
          pattern="^\d{2}:\d{2}:\d{2}$"
          title="Format is HH:MM:SS (example: 01:30:00)"
          style={{margin: '5px'}}
          name="WetStep"
          value={(data.OPTIONS.WET_STEP)}
          onChange={e=>onUpdate({...data}, data.OPTIONS.WET_STEP = e.target.value)}
        >
        </input>
      </label>
    </>
  )
}

export default WetStep;