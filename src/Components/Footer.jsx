import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <Nav className='footer'>
      <Card className="text-center" id='footer' >
        <Card.Body className='text-card2'>
          <Container>
            <Row md={4} >
              <Col className='colFooter'>
                <h3>Te ayudamos</h3>
                <ul className='footerCol'>
                  <li> <a href="/">Venta telefónica 600 390 6500</a></li>
                  <li> <a href="/">Contáctanos</a></li>
                  <li> <a href="/">Centro de ayuda</a></li>
                  <li> <a href="/">Devoluciones y cambios</a></li>
                  <li> <a href="/">Estado del pedido</a></li>
                </ul>
              </Col>
              <Col xs={6} className='colFooter'>
                <h3>Sé parte de D'perfumes</h3>
                <ul className='footerCol'>

                  <li> <a href="/">Nuestros inversionistas</a></li>
                  <li> <a href="/">Venta empresa</a></li>
                  <li> <a href="/">Centro de ayuda</a></li>
                  <li> <a href="/">Cyber Monday</a></li>
                  <li> <a href="/">Black Friday</a></li>
                </ul>
              </Col>
              <Col className='colFooter'>
                <h3>Únete a nuestros programas</h3>
                <ul className='footerCol'>
                  <li> <a href="/">Club Mascotas</a></li>
                  <li> <a href="/">Club Bebé</a></li>
                  <li> <a href="/">Novios D'perfumes</a></li>
                </ul>
              </Col>
              <Col className='colFooter'>
                <h3>Nuestras empresas</h3>
                <ul className='footerCol'>
                  <li><a href="/">Fpay</a></li>
                  <li><a href="/">Mallplaza</a></li>
                  <li><a href="/">Fazil</a></li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Card.Body>
        <Container>
          <Row>
            <Col className='colFooter2'>
              <ul className='footerCol2'>
                <li> <i className="fa-brands fa-facebook"></i> </li>
                <li><i className="fa-brands fa-twitter"></i> </li>
                <li> <i className="fa-brands fa-youtube"></i> </li>
                <li><i className="fa-brands fa-instagram"></i></li>
              </ul>
              <ul className='footerCol3'>
                <li>Términos y condiciones</li>
                <li>Política de cookies</li>
                <li>Política de privacidad</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Card>
    </Nav>
  )
}

export default Footer




