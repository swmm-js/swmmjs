import React from 'react';

function LinkOffsets({data = {}, onUpdate, style = {}}) {

  var options = [
    'DEPTH', 
    'ELEVATION'
  ]

  return (
    <>
      <label htmlFor={"LinkOffsets"} style={style}>Link Offsets: 
        <select style={{margin: '5px'}}
          name="LinkOffsets"
          value={data.OPTIONS.LINK_OFFSETS}
          onChange={e=>onUpdate({...data}, data.OPTIONS.LINK_OFFSETS = e.target.value)}
        >
          {options.map((option, i) => <option key={i} value={option}>{option}</option>)}
        </select>
      </label>
    </>
  )
}

export default LinkOffsets;