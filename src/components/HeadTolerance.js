import React from 'react';

function HeadTolerance({data = {}, onUpdate, style = {}}) {

  return (
    <>
      <label htmlFor="HeadTolerance" style={style}>Head Tolerance: 
        <input style={{margin: '5px'}}
          type="number"
          name="HeadTolerance"
          value={data.OPTIONS.HEAD_TOLERANCE?data.OPTIONS.HEAD_TOLERANCE:''}
          onInput={e=>onUpdate({...data}, data.OPTIONS.HEAD_TOLERANCE = parseFloat(e.target.value))}
        />
      </label>
    </>
  )
}

export default HeadTolerance;