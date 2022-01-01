import React from 'react';

function StartTime({data = {}, onUpdate, style = {}}) {

  return (
    <>
      <label htmlFor={'StartTime'} style={{display: "block"}}>Start Time: 
        <input 
          type="time"
          style={{margin: '5px'}}
          name="StartTime"
          value={(data.OPTIONS.START_TIME)}
          onChange={e=>onUpdate({...data}, data.OPTIONS.START_TIME = e.target.value)}
        >
        </input>
      </label>
    </>
  )
}

export default StartTime;