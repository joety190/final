import React, { Component, useState } from 'react'
import  Button  from 'react-bootstrap/Button'
import  ButtonGroup, { Row }  from 'react-bootstrap'
import ItemCarousel from './item'



export default function BuyButton() {
    const item = 
      {
     img: "",
     itemDetail: 'Shirt' ,
     color: "Blue",
     price: "15.00",
      }
      const Item2 = 
      {
        img: "",
        itemDetail: 'Long Sleeve Shirt' ,
        color: "Blue",
        price: '25.00',
         }

    const onBuyButtonclick = (event) => {
        event.preventDefault();

        
    }
    return (
        <div>
    <Button variant="primary" size="sm" onClick={onBuyButtonclick}>
      Buy
    </Button>
    
  </div>
    )
    
  }

