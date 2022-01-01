import React from 'react';

function RoutingStep({data = {}, onUpdate, style = {}}) {

  return (
    <>
      <label htmlFor={'RoutingStep'} style={{display: "block"}}>Routing Step: 
        <input 
          type="text"
          pattern="^\d{2}:\d{2}:\d{2}$"
          title="Format is HH:MM:SS (example: 01:30:00)"
          style={{margin: '5px'}}
          name="RoutingStep"
          value={(data.OPTIONS.ROUTING_STEP)}
          onChange={e=>onUpdate({...data}, data.OPTIONS.ROUTING_STEP = e.target.value)}
        >
        </input>
      </label>
    </>
  )
}

export default RoutingStep;