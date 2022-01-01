import React from 'react';

function SysFlowTolerance({data = {}, onUpdate, style = {}}) {

  return (
    <>
      <label htmlFor="SysFlowTolerance" style={style}>Sys. Flow Tolerance: 
        <input style={{margin: '5px'}}
          type="number"
          name="SysFlowTolerance"
          value={data.OPTIONS.SYS_FLOW_TOL?data.OPTIONS.SYS_FLOW_TOL:''}
          onInput={e=>onUpdate({...data}, data.OPTIONS.SYS_FLOW_TOL = parseFloat(e.target.value))}
        />
      </label>
    </>
  )
}

export default SysFlowTolerance;