import React from 'react';

function NormalFlowLimited({data = {}, onUpdate, style = {}}) {

  var options = [
    'SLOPE',
    'FROUDE',
    'BOTH'
  ]

  return (
    <>
      <label htmlFor="NormalFlowLimited" style={style}>Normal Flow Limited: 
        <select style={{margin: '5px'}}
          name="NormalFlowLimited"
          value={data.OPTIONS.NORMAL_FLOW_LIMITED}
          onChange={
            e=>onUpdate(
              {...data}, 
              data.OPTIONS.NORMAL_FLOW_LIMITED = e.target.value
            )
          }
        >
          {options.map((option, i) => <option key={i} value={option}>{option}</option>)}
        </select>
      </label>
    </>
  )
}

export default NormalFlowLimited;