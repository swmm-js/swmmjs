import React from 'react';

function StartDate({data = {}, onUpdate, style = {}}) {

  return (
    <>
      <label htmlFor={'StartDate'} style={{display: "block"}}>Start Date: 
        <input 
          type="datetime"
          style={{margin: '5px'}}
          name="StartDate"
          value={(data.OPTIONS.START_DATE)}
          onChange={e=>onUpdate({...data}, data.OPTIONS.START_DATE = e.target.value)}
        >
        </input>
      </label>
    </>
  )
}

export default StartDate;