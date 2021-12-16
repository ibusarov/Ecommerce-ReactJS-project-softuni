import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Annoucement = () => {
  return (
    <Container
      fluid
      style={{
        'backgroundColor': 'rgb(92,230,92)',
        color: 'white',
        'fontSize': '20px',
        height: '30px',
        display: 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
      }}
      className='cards__item__img'
    >
      <Row>
        <Col> Super Deal! Free Shipping on Orders over 100 BGN</Col>
      </Row>
    </Container>
  )
}

export default Annoucement
