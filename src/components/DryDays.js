import React from 'react';

function DryDays({data = {}, onUpdate, style = {}}) {

  return (
    <>
      <label htmlFor="DryDays" style={style}>Dry Days: 
        <input style={{margin: '5px'}}
          type="number"
          name="DryDays"
          value={data.OPTIONS.DRY_DAYS}
          onInput={e=>onUpdate({...data}, data.OPTIONS.DRY_DAYS = parseFloat(e.target.value))}
        />
      </label>
    </>
  )
}

export default DryDays;