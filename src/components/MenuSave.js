import React from 'react';
import { saveInp } from '../swmmjs.js'

function MenuSave({model = {}, onUpdate, style = {}}) {
  return (
    <>
      <button 
        id="fileSave"
        onClick={()=>{
          onUpdate(model); 
        }}
      >Save</button>
    </>
  )
}

  
export default MenuSave;