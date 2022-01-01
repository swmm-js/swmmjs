import React from 'react';

function ConduitsMaxFlow({data = {}, onUpdate, style = {}, conduitName}) {

  return (
    <>
      <label htmlFor={'ConduitsMaxFlow'} style={{display: "block"}}>Max flow: 
        <input 
          type="text"
          name="ConduitsMaxFlow"
          style={{margin: '5px'}}
          value={data.CONDUITS[conduitName] === undefined? '' :data.CONDUITS[conduitName].MaxFlow}
          onInput={e=>onUpdate({...data}, data.CONDUITS[conduitName].MaxFlow = e.target.value)}
        >
        </input>
      </label>
    </>
  )
}

export default ConduitsMaxFlow;
