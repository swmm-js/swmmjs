import React from 'react';

function MaxTrials({data = {}, onUpdate, style = {}}) {

  return (
    <>
      <label htmlFor="MaxTrials" style={style}>Max. Trials: 
        <input style={{margin: '5px'}}
          type="number"
          name="MaxTrials"
          value={data.OPTIONS.MAX_TRIALS?data.OPTIONS.MAX_TRIALS:''}
          onInput={e=>onUpdate({...data}, data.OPTIONS.MAX_TRIALS = parseInt(e.target.value))}
        />
      </label>
    </>
  )
}

export default MaxTrials;