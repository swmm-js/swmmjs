import React from 'react';

function ConduitsName({data = {}, onUpdate, style = {}, conduitName}) {

  return (
    <>
      <label htmlFor={'ConduitsName'} style={{display: "block"}}>Name: 
        <input 
          type="text"
          name="ConduitsName"
          style={{margin: '5px'}}
          value={conduitName}
          readOnly 
          disabled
        >
        </input>
      </label>
    </>
  )
}

export default ConduitsName;
