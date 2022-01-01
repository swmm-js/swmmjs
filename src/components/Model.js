import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import OptionsMenu from './OptionsMenu';
import ButtonFile from './ButtonFile';
import ButtonSave from './ButtonSave';
import Conduits from './Conduits';
import funcx from "../ncrs_scs.js";
import data from '../data/nrcs_scs.json';
import {Button} from 'react-bootstrap'
import ScsTypeDropdown from './ScsTypeDropdown';


function Model({model = {}, title='', onUpdate = f => f}) {

  return (
  <>
    <Container className='p-3'>
      <Container className='p-5 mb-4 bg-dark rounded-3'>
        <Row className='justify-content-md-center'>
          <Col xs lg='2'>
            <ButtonFile model={model} onUpdate={onUpdate}></ButtonFile>
          </Col>
          <Col xs lg='2'>
            <ButtonSave model={model} onUpdate={onUpdate}></ButtonSave>
          </Col>
          <Col xs lg='2'>
            <Button onClick={f=>{ funcx(data, "I", 6, model, onUpdate); }}>Calc</Button>
          </Col>
        </Row>
        <ScsTypeDropdown model={model}></ScsTypeDropdown>
      </Container>
    </Container>
  </>
  );
}

export default Model;