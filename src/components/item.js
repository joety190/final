import React, { Component } from "react";
import Carousel  from "react-bootstrap/Carousel";
import {  Col, Container, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";


export default function ItemCarousel() {

  return (

     <div>
       <Container fluid="sm">
       <Row xs={2}>
         <Col xs={4}>
     <Card>
      <Carousel>
       <Carousel.Item>
     <img
      className="d-block w-100"
  height={360 }
 sizes={360 }
    src="https://cdn.shopify.com/s/files/1/1368/3463/products/SKY-CREW-SPLIT.jpg?v=1651775439"
         alt="First slide"
       />
       <Carousel.Caption>
         
       <h3>Shirt</h3>
         <p>Blue.</p>
         <p>price</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
       className="d-block w-100"
       height={360 }
      
       src="https://cdn.shopify.com/s/files/1/1368/3463/products/CABERNET-CREW-SPLIT-HEM.jpg?v=1635782708"
         alt="Second slide"
       />
  
       <Carousel.Caption>
         <h3>Shirt</h3>
       <p>Red.</p>
         <p>price</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         height={360}
         
         src="https://cdn.shopify.com/s/files/1/1368/3463/products/BLACK_SPLIT_HEM_WEB_cb540b01-645a-470f-abf3-7cc1cc52f0ca.jpg?v=1649174924"
         alt="Third slide"
       />
  
     <Carousel.Caption>
       <h3>Shirt</h3>
      <p>Black</p>
        <p>price</p>
      </Carousel.Caption>
     </Carousel.Item>
  </Carousel>
   </Card>
   </Col>
  

   <Col xs={4}>
     <Card>
      <Carousel>
       <Carousel.Item>
     <img
      className="d-block w-100"
  height={360 }
 sizes={360 }
    src="https://img.ltwebstatic.com/images3_pi/2021/12/23/1640244203861443db168d57c1ebc77efcafb522a6_thumbnail_600x.webp"
         alt="First slide"
       />
       <Carousel.Caption>
         
       <h3>Long sleeve</h3>
         <p>Gray.</p>
         <p>price</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
       className="d-block w-100"
       height={360 }
      
       src="https://img.ltwebstatic.com/images3_pi/2022/04/18/1650251715526623846c5974a7e057a4e332fb2bb2_thumbnail_600x.webp"
         alt="Second slide"
       />
  
       <Carousel.Caption>
         <h3>Long sleeve</h3>
       <p>Red.</p>
         <p>price</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         height={360}
         
         src="https://img.ltwebstatic.com/images3_pi/2022/04/18/1650275568c63ade2184c733b55fec003a82b1ecd2_thumbnail_600x.webp"
         alt="Third slide"
       />
  
     <Carousel.Caption>
       <h3>Shirt</h3>
      <p>Black</p>
        <p>price</p>
      </Carousel.Caption>
     </Carousel.Item>
  </Carousel>
   </Card>
   </Col>
  
   </Row>
   </Container>
   </div>




  )

}

