import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import OptionsMenu from './OptionsMenu'
import ButtonFile from './ButtonFile'
import ButtonSave from './ButtonSave'
import funcx from "../ncrs_scs.js"
import {Button} from 'react-bootstrap'
import ScsTypeDropdown from './ScsTypeDropdown'
import ScsDurationDropdown from './ScsDurationDropdown'
//import InpTextView from './InpTextView'

function Model({model = {}, title='', onUpdate = () => {}}) {
  const [inpText, updateInpText] = useState('');
  const [selectedType, onTypeChange] = useState('I');
  const [selectedDuration, onDurationChange] = useState('6');

  return (
  <>
  <div style={{height: '100vh', backgroundColor: 'black'}}>
    <Container className='p-3' >
      <Container className='p-5 mb-4 bg-dark rounded-3'>
        <Row className='justify-content-md-center mt-2'>
          <Col xs lg='8'>
            <ButtonFile model={model} onUpdate={onUpdate}></ButtonFile>
          </Col>
        </Row>
        <Row className='justify-content-md-center mt-2'>
          <Col xs lg='4'>
            <ScsTypeDropdown model={model} onTypeChange={onTypeChange}></ScsTypeDropdown>
          </Col>
          <Col xs lg='4'>
            <ScsDurationDropdown model={model} onDurationChange={onDurationChange}></ScsDurationDropdown>
          </Col>
        </Row>
        <Row className='justify-content-md-center mt-2'>
          <Col xs lg='8'>
            <Button onClick={f=>{ funcx(selectedType, selectedDuration, model, onUpdate); }} style={{width: '100%'}}>Calc</Button>
          </Col>
        </Row>
        <Row className='justify-content-md-center mt-3'>
          <Col xs lg='8' >
            <ButtonSave model={model} onUpdate={onUpdate} fileTextUpdate={updateInpText} style={{width: '100%'}}></ButtonSave>
          </Col>
        </Row>
        <Row className='justify-content-md-center mt-3' >
          <Col xs lg='8'>
            <textarea id="inpFileTextArea" model={model} value={inpText} readOnly style={{width: '100%', height: '500px', overflow: 'scroll', whiteSpace: 'pre'}}></textarea>
          </Col>
        </Row>
      </Container>
    </Container>
    </div>
  </>
  );
}

export default Model;