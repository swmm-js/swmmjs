import React from 'react';

function ConduitsRoughness({data = {}, onUpdate, style = {}, conduitName = '1'}) {

  return (
    <>
      <label htmlFor={'ConduitsRoughness'} style={{display: "block"}}>Roughness: 
        <input 
          type="text"
          name="ConduitsRoughness"
          style={{margin: '5px'}}
          value={data.CONDUITS[conduitName].Roughness}
          onInput={e=>onUpdate({...data}, data.CONDUITS[conduitName].Roughness = e.target.value)}
        >
        </input>
      </label>
    </>
  )
}

export default ConduitsRoughness;
