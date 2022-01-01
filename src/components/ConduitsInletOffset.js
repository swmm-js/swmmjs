import React from 'react';

function ConduitsInletOffset({data = {}, onUpdate, style = {}, conduitName = '1'}) {

  return (
    <>
      <label htmlFor={'ConduitsInletOffset'} style={{display: "block"}}>Inlet offset: 
        <input 
          type="text"
          name="ConduitsInletOffset"
          style={{margin: '5px'}}
          value={data.CONDUITS[conduitName] === undefined? '' :data.CONDUITS[conduitName].InOffset}
          onInput={e=>onUpdate({...data}, data.CONDUITS[conduitName].InOffset = e.target.value)}
        >
        </input>
      </label>
    </>
  )
}

export default ConduitsInletOffset;
