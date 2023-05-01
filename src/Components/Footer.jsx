import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <div className='footer'>
      <Card className="text-center" id='footer' >
        <Card.Body>
          <Container>
            <Row md={4} >
              <Col className='colFooter'>
                <h3>Te ayudamos</h3>
                <ul className='footerCol'>
                  <a href=""> <li>Venta telefónica 600 390 6500</li></a>
                  <a href=""><li>Contáctanos</li></a>
                  <a href=""><li>Centro de ayuda</li></a>
                  <a href=""><li>Devoluciones y cambios</li></a>
                  <a href=""> <li>Estado del pedido</li></a>
                </ul>
              </Col>
              <Col xs={6} className='colFooter'>
                <h3>Sé parte de D´perfumes</h3>
                <ul className='footerCol'>
                  <a href=""> <li>Nuestros inversionistas</li></a>
                  <a href=""><li>Venta empresa</li></a>
                  <a href="">  <li>Cyber Monday</li></a>
                  <a href=""> <li>Black Friday</li></a>
                </ul>
              </Col>
              <Col className='colFooter'>
                <h3>Únete a nuestros programas</h3>
                <ul className='footerCol'>
                  <a href=""><li>Club Mascotas</li></a>
                  <a href=""><li>Club Bebé</li></a>
                  <a href=""><li>Novios D´perfumes</li></a>
                </ul>
              </Col>
              <Col className='colFooter'>
                <h3>Nuestras empresas</h3>
                <ul className='footerCol'>
                  <a href=""><li>Fpay</li></a>
                  <a href=""> <li>Mallplaza</li></a>
                  <a href=""><li>Fazil</li></a>
                  <a href=""> <li>Sobre D´perfumes</li></a>
                  <a href="">  <li>Sobre D´perfumes.com</li></a>
                </ul>
              </Col>

            </Row>
          </Container>
        </Card.Body>
        <Container>
          <Row>
            <Col className='colFooter2'>
              <ul className='footerCol2'>
                <li> <i class="fa-brands fa-facebook"></i> </li>
                <li><i class="fa-brands fa-twitter"></i> </li>
                <li> <i class="fa-brands fa-youtube"></i> </li>
                <li><i class="fa-brands fa-instagram"></i></li>
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
    </div>
  )
}

export default Footer




