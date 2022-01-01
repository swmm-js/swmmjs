import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap'

function ScsTypeDropdown({data = {}, onUpdate, style = {}}) {

  const options = [
    'I', 
    'Ia',
    'II',
    'III'
  ]

  function setType(e) {

  }

  return (
    <>
      <label htmlFor="ScsType" style={style, {color:'white', width: '100%'}}>SCS Type: 
        <DropdownButton style={{margin: '5px', width: '100%'}}
          className={"btn-block"}
          name="ScsType"
          onChange={e=>setType(e.target.value)}
        >
          {options.map((option, i) => <Dropdown.Item key={i} value={option}>{option}</Dropdown.Item>)}
        </DropdownButton>
      </label>
    </>
  )
}

export default ScsTypeDropdown;