import { Button } from 'react-bootstrap';
import React  from 'react'
import { Col, Row } from 'react-bootstrap'
import BuyButton from './buttons'
import { Card } from 'react-bootstrap';

export default function CheckCart(props)  {
        const {cartItems, onAdd, onRemove} = props;


    return (
        <div>
            <h2>
                Cart Items
            </h2>
            <Row>
                
                {cartItems.length === 0 && <div> Cart is empty </div> }
                </Row>
            <Row>
             {cartItems.map((item) => (<div key={item.id}></div>
                ))}
            </Row>
            <Row>
            {cartItems.map((item) => (
            <Card>
            <Row key={item.id}> </Row>
              <Col>{item.name}</Col>
              <Button onClick={()=> onAdd(item)} >+</Button>
              <Button onClick={()=> onRemove(item)} >-</Button>
                <div>
                    {item.qty} x ${item.price}
                </div>
            
            
            </Card>
              ))}
            </Row>
            
        </div>

    )
  
}
