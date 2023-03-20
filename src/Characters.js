import React, { useState } from 'react'
import brian from './images/brian.svg'
import chris from './images/chris.svg'
import lois from './images/lois.svg';
import peter from './images/peter.svg';
import stewie from './images/stewie.svg';
import Data from './generate.json';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image';
import  { Link }  from 'react-router-dom';
import Button from 'react-bootstrap/Button';

console.log(Data)
function Characters() {

  const [character, setCharacter] = useState([])

  const arr = [brian, chris, lois, peter, stewie];


  const ImageList = ({ element, index }) => (
    <Link to="/">
   <div style={{backgroundImage: `url${element.src}`}}></div>
   </Link>
  );

  const Images = arr.map(image => (
    <Card style={{width: '30rem'}}>
      <Card.Img src={image} />
    </Card>
  ))

    const listItems = Data.map((element, index) => (
    <ImageList key={element.id} element={element} index={index} />
 


  ));

    
  return (
    <>
   
    <div>{Images}</div>
    
    </>
    
  )
}

export default Characters