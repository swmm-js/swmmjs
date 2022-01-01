import React from 'react';

function ConduitsInletNode({data = {}, onUpdate, style = {}, conduitName}) {

  return (
    <>
      <label htmlFor={'ConduitsInletNode'} style={{display: "block"}}>Inlet Node: 
        <input 
          type="text"
          name="ConduitsInletNode"
          style={{margin: '5px'}}
          value={data.CONDUITS[conduitName] === undefined? '' :data.CONDUITS[conduitName].FromNode}
          onInput={e=>onUpdate({...data}, data.CONDUITS[conduitName].FromNode = e.target.value)}
        >
        </input>
      </label>
    </>
  )
}

export default ConduitsInletNode;
