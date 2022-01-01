import React from 'react';
import { Dropdown, DropdownButton, Label, Form } from 'react-bootstrap'

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
      <Form >
        <Form.Group  controlId="formScsType">
          <Form.Label className="text-light" style={{width: '100%'}}>SCS Type: 
            <Form.Select
              className="form-select form-select-lg"
              name="ScsType"
              onChange={e=>setType(e.target.value)}
            >
              {options.map((option, i) => <option key={i} value={option} style={{width:'100%'}}>{option}</option>)}
            </Form.Select>
          </Form.Label>
        </Form.Group>
      </Form>
    </>
  )
}

export default ScsTypeDropdown;