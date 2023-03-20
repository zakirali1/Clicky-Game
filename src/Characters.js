import React, { useState } from 'react'
import brian from './images/brian.svg'
import chris from './images/chris.svg'
import lois from './images/lois.svg';
import peter from './images/peter.svg';
import stewie from './images/stewie.svg';
import Data from './generate.json';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

console.log(Data)
function Characters() {

  const [character, setCharacter] = useState([])

  const arr = [brian, chris, lois, peter, stewie];


  const ImageList = ({ element, index }) => (
   <Card key={element.key} style={{width: '18rem'}}>
    <Card.Img src={element.src} />
   </Card>
  );

    const listItems = Data.map((element, index) => (
    <ImageList key={element.id} element={element} index={index} />
 


  ));

    
  return (
    <>
   
    <div>{listItems}</div>
    
    </>
    
  )
}

export default Characters