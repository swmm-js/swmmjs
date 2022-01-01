import React from 'react';

function MinSlope({data = {}, onUpdate, style = {}}) {

  return (
    <>
      <label htmlFor="MinSlope" style={style}>Min Slope: 
        <input style={{margin: '5px'}}
          type="number"
          step="any"
          name="MinSlope"
          value={data.OPTIONS.MIN_SLOPE?data.OPTIONS.MIN_SLOPE:''}
          onInput={e=>onUpdate({...data}, e.target.value?data.OPTIONS.MIN_SLOPE = parseFloat(e.target.value):delete data.OPTIONS.MIN_SLOPE)}
        />
      </label>
    </>
  )
}

export default MinSlope;