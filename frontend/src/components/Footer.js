import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
const Footer = () => {
  return (
    <footer className='gradient-bg-footer'>
      <Container>
        <Row className='color-nav'>
          <Col className='text-center' py-3>
            Copyright &copy; Shop
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer