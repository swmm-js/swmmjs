import React from 'react';

function MinSurfArea({data = {}, onUpdate, style = {}}) {

  return (
    <>
      <label htmlFor="MinSurfArea" style={style}>Min. Surface Area: 
        <input style={{margin: '5px'}}
          type="number"
          name="MinSurfArea"
          value={data.OPTIONS.MIN_SURFAREA}
          onInput={e=>onUpdate({...data}, data.OPTIONS.MIN_SURFAREA = parseFloat(e.target.value))}
        />
      </label>
    </>
  )
}

export default MinSurfArea;