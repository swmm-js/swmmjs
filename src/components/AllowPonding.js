import React from 'react';

function AllowPonding({data = {}, onUpdate, style = {}}) {

  var options = [
    'YES', 
    'NO'
  ]

  return (
    <>
      <label htmlFor={'AllowPonding'} style={style}>Allow Ponding: 
        <select 
          style={{margin: '5px'}}
          name="AllowPonding"
          value={data.OPTIONS.ALLOW_PONDING}
          onChange={e=>onUpdate({...data}, data.OPTIONS.ALLOW_PONDING = e.target.value)}
        >
          {options.map((option, i) => <option key={i} value={option}>{option}</option>)}
        </select>
      </label>
    </>
  )
}

export default AllowPonding;