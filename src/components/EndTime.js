import React from 'react';

function EndTime({data = {}, onUpdate, style = {}}) {

  return (
    <>
      <label htmlFor={'EndTime'} style={style}>End Time: 
        <input 
          type="time"
          style={{margin: '5px'}}
          name="EndTime"
          value={(data.OPTIONS.END_TIME)}
          onChange={e=>onUpdate({...data}, data.OPTIONS.END_TIME = e.target.value)}
        >
        </input>
      </label>
    </>
  )
}

export default EndTime;