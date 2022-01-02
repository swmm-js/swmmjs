import React from 'react';
import { Dropdown, DropdownButton, Label, Form } from 'react-bootstrap'

function ScsDurationDropdown({data = {}, onUpdate, style = {}}) {

  const options = [
    '6', 
    '12',
    '18',
    '24'
  ]

  function setType(e) {

  }

  return (
    <>
      <Form >
        <Form.Group  controlId="formScsDuration">
          <Form.Label className="text-light" style={{width: '100%'}}>Duration: 
            <Form.Select
              className="form-select form-select-lg"
              name="ScsDuration"
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

export default ScsDurationDropdown;