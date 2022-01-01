import React from 'react';

function ConduitsOutletOffset({data = {}, onUpdate, style = {}, conduitName}) {

  return (
    <>
      <label htmlFor={'ConduitsOutletOffset'} style={{display: "block"}}>Outlet offset: 
        <input 
          type="text"
          name="ConduitsOutletOffset"
          style={{margin: '5px'}}
          value={data.CONDUITS[conduitName] === undefined? '' :data.CONDUITS[conduitName].OutOffset}
          onInput={e=>onUpdate({...data}, data.CONDUITS[conduitName].OutOffset = e.target.value)}
        >
        </input>
      </label>
    </>
  )
}

export default ConduitsOutletOffset;
