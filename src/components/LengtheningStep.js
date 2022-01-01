import React from 'react';

function LengtheningStep({data = {}, onUpdate, style = {}}) {

  return (
    <>
      <label htmlFor="LengtheningStep" style={style}>Lengthening Step: 
        <input style={{margin: '5px'}}
          type="number"
          name="LengtheningStep"
          value={data.OPTIONS.LENGTHENING_STEP}
          onInput={e=>onUpdate({...data}, data.OPTIONS.LENGTHENING_STEP = parseFloat(e.target.value))}
        />
      </label>
    </>
  )
}

export default LengtheningStep;