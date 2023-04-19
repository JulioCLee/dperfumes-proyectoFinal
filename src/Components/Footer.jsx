import React from 'react'
import Card from 'react-bootstrap/Card';

const Footer = () => {
  return (
    <div className='footer'>
     <Card className="text-center" id='footer' >
      <Card.Header className='footerHeader'>D´Perfumes</Card.Header>
      <Card.Body>
        <Card.Text>
          Julio Lee
        </Card.Text>
        <Card.Text>
         Ronny Orellana
        </Card.Text>
        <Card.Text>
          Jose Gutierrez
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">Muchas gracias por su atencion!!!</Card.Footer>
    </Card>
    </div>
  )
}

export default Footer




