import React from 'react'
import {Col, Row} from 'react-bootstrap'
import Item from './item';

export default function MainComp(props) {
    const {items, onAdd} = props;
    return (
    <div className='block col-2'>
        <h2>
            shirts
        </h2>
        <Row>
            {items.map((item) => (
                <Item key={item.id} item={item} onAdd={onAdd}></Item>
            ))}
        </Row>
    </div>
  )
}
