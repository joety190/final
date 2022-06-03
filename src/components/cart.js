import { Button } from 'react-bootstrap';
import React  from 'react'
import { Col, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap';

export default function CheckCart(props)  {
        const {cartItems, onAdd, onRemove} = props;
    const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const deliveryFee = itemPrice > 100 ? 0 : 5;
    const orderPrice = itemPrice + deliveryFee;

    console.log("check type of", typeof cartItems)
    const len = Object.keys(cartItems).length 
    console.log(len)
    return (
        <div>
            <h2>
                Cart Items
            </h2>
            <Row>
                {len === 0 && <div> Cart is empty </div> }
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
                   {item.itemDetail} {item.qty} x ${item.price}
                </div>
            
            
            </Card>
              ))}
              {cartItems.length !== 0 && (
                  <Card>
                  <Row>
                      <Col>
                      item Price
                      </Col>
                      <Col>
                      ${itemPrice.toFixed(2)}
                      </Col>
                  </Row>
                  
                  <Row>
                      <Col>
                      Delivery Fee
                      </Col>
                      <Col>
                      ${deliveryFee.toFixed(2)}
                      </Col>
                  </Row>

                  <Row>
                      <Col>
                      Order Price
                      </Col>
                      <Col>
                      ${orderPrice.toFixed(2)}
                      </Col>
                  </Row>


                  </Card>       
              )}
            </Row>
            
        </div>

    )
  
}
