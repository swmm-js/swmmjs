import React from 'react';
import { Form } from 'react-bootstrap'

function ScsVolumeNUD({data = {}, onVolumeChange = () => {}, style = {}}) {

  function setType(e) {
    onVolumeChange(e.target.value)
  }

  return (
    <>
      <Form >
        <Form.Group  controlId="formScsDuration">
          <Form.Label className="text-light" style={{width: '100%'}}>Volume: 
            <Form.Control
              className="form-control form-control-lg"
              name="ScsDuration"
              type="number"
              defaultValue={1}
              onChange={e=>setType(e)}
            >
            </Form.Control>
          </Form.Label>
        </Form.Group>
      </Form>
    </>
  )
}

export default ScsVolumeNUD;