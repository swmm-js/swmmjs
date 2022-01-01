import React from 'react';

function VariableStep({data = {}, onUpdate, style = {}}) {

  return (
    <>
      <label htmlFor="VariableStep" style={style}>Variable Step: 
        <input style={{margin: '5px'}}
          type="number"
          name="VariableStep"
          value={data.OPTIONS.VARIABLE_STEP}
          onInput={e=>onUpdate({...data}, data.OPTIONS.VARIABLE_STEP = parseFloat(e.target.value))}
        />
      </label>
    </>
  )
}

export default VariableStep;