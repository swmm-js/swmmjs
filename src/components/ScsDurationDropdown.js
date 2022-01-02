import React from 'react';
import { Form } from 'react-bootstrap'

function ScsDurationDropdown({data = {}, onDurationChange = () => {}, style = {}}) {

  const options = [
    '6', 
    '12',
    '18',
    '24'
  ]

  function setType(e) {
    onDurationChange(e.target.value)
  }

  return (
    <>
      <Form >
        <Form.Group  controlId="formScsDuration">
          <Form.Label className="text-light" style={{width: '100%'}}>Duration: 
            <Form.Select
              className="form-select form-select-lg"
              name="ScsDuration"
              onChange={e=>setType(e)}
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