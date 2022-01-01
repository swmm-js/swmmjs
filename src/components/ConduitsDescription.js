import React from 'react';

function ConduitsDescription({data = {}, onUpdate, style = {}, conduitName}) {

  return (
    <>
      <label htmlFor={'ConduitsDescription'} style={{display: "block"}}>Description: 
        <input 
          type="text"
          name="ConduitsDescription"
          style={{margin: '5px'}}
          value={data.CONDUITS[conduitName] === undefined? '' :data.CONDUITS[conduitName].Description}
          onInput={e=>onUpdate({...data}, data.CONDUITS[conduitName].Description = e.target.value)}
        >
        </input>
      </label>
    </>
  )
}

export default ConduitsDescription;
