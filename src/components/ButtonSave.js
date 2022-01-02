import React from 'react';
import { saveInp } from '../swmmjs.js'
import { Button } from 'react-bootstrap'

function ButtonSave({model = {}, onUpdate, fileTextUpdate = () => {}, style = {}}) {
  return (
    <>
      <Button 
        style={{width:'100%'}}
        id="fileSave"
        onClick={()=>{fileTextUpdate(saveInp(model)); onUpdate(model)}}
      >Save</Button>
    </>
  )
}

  
export default ButtonSave;