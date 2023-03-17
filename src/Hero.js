import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import hero from './hero.css'

function Hero() {
  return (
    
         <Container className='jumbo'>
        <div className="container-fluid text-sm-center p-5 " > 
        <h1 className="display-2">Clicky Game!</h1>
        <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
    </div>
    </Container>
   
  )
}

export default Hero