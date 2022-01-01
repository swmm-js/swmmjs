import React from 'react';

function ConduitsOutletNode({data = {}, onUpdate, style = {}, conduitName}) {

  return (
    <>
      <label htmlFor={'ConduitsOutletNode'} style={{display: "block"}}>Outlet Node: 
        <input 
          type="text"
          name="ConduitsOutletNode"
          style={{margin: '5px'}}
          value={data.CONDUITS[conduitName] === undefined? '' :data.CONDUITS[conduitName].ToNode}
          onInput={e=>onUpdate({...data}, data.CONDUITS[conduitName].ToNode = e.target.value)}
        >
        </input>
      </label>
    </>
  )
}

export default ConduitsOutletNode;
