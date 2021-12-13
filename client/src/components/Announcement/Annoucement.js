import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Annoucement = () => {
  return (
    <Container
      fluid
      style={{
        'background-color': 'rgb(92,230,92)',
        color: 'white',
        'font-size': '20px',
        height: '30px',
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
      }}
      className='cards__item__img'
    >
      <Row>
        <Col> Super Deal! Free Shipping on Orders over 50 BGN</Col>
      </Row>
    </Container>
  )
}

export default Annoucement
