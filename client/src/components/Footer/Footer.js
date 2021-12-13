import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3 cards__item__img' style={{ color: 'rgb(48,25,52)' }}>
            Copyright &copy: E-mC
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
