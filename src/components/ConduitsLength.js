import React from 'react';

function ConduitsLength({data = {}, onUpdate, style = {}, conduitName}) {

  return (
    <>
      <label htmlFor={'ConduitsLength'} style={{display: "block"}}>Length: 
        <input 
          type="text"
          name="ConduitsLength"
          style={{margin: '5px'}}
          value={data.CONDUITS[conduitName] === undefined? '' :data.CONDUITS[conduitName].Length}
          onInput={e=>onUpdate({...data}, data.CONDUITS[conduitName].Length = e.target.value)}
        >
        </input>
      </label>
    </>
  )
}

export default ConduitsLength;
