import React from 'react';

function EndDate({data = {}, onUpdate, style = {}}) {

  return (
    <>
      <label htmlFor={'EndDate'} style={style}>End Date: 
        <input 
          type="datetime"
          style={{margin: '5px'}}
          name="EndDate"
          value={(data.OPTIONS.END_DATE)}
          onChange={e=>onUpdate({...data}, data.OPTIONS.END_DATE = e.target.value)}
        >
        </input>
      </label>
    </>
  )
}

export default EndDate;