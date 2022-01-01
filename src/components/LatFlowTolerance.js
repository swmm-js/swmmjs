import React from 'react';

function LatFlowTolerance({data = {}, onUpdate, style = {}}) {

  return (
    <>
      <label htmlFor="LatFlowTolerance" style={style}>Lat. Flow Tolerance: 
        <input style={{margin: '5px'}}
          type="number"
          name="LatFlowTolerance"
          value={data.OPTIONS.LAT_FLOW_TOL}
          onInput={e=>onUpdate({...data}, data.OPTIONS.LAT_FLOW_TOL = parseFloat(e.target.value))}
        />
      </label>
    </>
  )
}

export default LatFlowTolerance;