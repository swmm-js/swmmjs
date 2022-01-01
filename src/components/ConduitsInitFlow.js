import React from 'react';

function ConduitsInitFlow({data = {}, onUpdate, style = {}, conduitName}) {

  return (
    <>
      <label htmlFor={'ConduitsInitFlow'} style={{display: "block"}}>Init flow: 
        <input 
          type="text"
          name="ConduitsInitFlow"
          style={{margin: '5px'}}
          value={data.CONDUITS[conduitName] === undefined? '' :data.CONDUITS[conduitName].InitFlow}
          onInput={e=>onUpdate({...data}, data.CONDUITS[conduitName].InitFlow = e.target.value)}
        >
        </input>
      </label>
    </>
  )
}

export default ConduitsInitFlow;
