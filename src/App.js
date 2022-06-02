import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';
import { Container,  } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import NavBarHere from './components/Navbar';
import About from './components/about section';
import Logo from './Logo';
import shirts from './ShirtItems';
import CheckCart from './components/cart';
import MainComp from './components/maincomp';






export default function App() {
const { items } = shirts;

const [cartItems, setCartItems] = useState([]);

const onAdd = (item) => {
  const exist = cartItems.find((x) => x.id === item.id);
  if(exist) {
    setCartItems(
      cartItems.map((x) =>
       x.id === item.id ? {...exist, qty: exist.qty + 1} : x
      ));
  } else {
    setCartItems([...cartItems, {... item, qty: 1 }])
  }
};

return (
        <div>
          
        <NavBarHere/>
        <MainComp onAdd={onAdd} items={items}/>
        <RouterArea/>
        <CheckCart onAdd={onAdd} cartItems={cartItems}/>
        </div>

);
}
function RouterArea() {
 return(
 <Router>
    <div>
      <Container>
       
     

      <Navbar expand="lg" variant="light" bg="light">
      <ButtonGroup>
        <Button variant="outline-secondary">
        <Link to="/home">Home</Link>
        </Button>
        <Button variant="outline-secondary">
        <Link to="/styles">styles</Link>
        </Button>
        <Button variant="outline-secondary">
        <Link to="/cart">Shopping Cart</Link>
        </Button>
      </ButtonGroup>
      <Switch>
        <Route path="/styles">
            <Styles />
        </Route>
         <Route path="/cart">
            <Cart cart= {"1234"}/>
        </Route>
        <Route path="/home">
            <Home/>
        </Route>
      </Switch>
      </Navbar>
      </Container>
    </div>
  </Router>
 )}
function Home() {
   return (
     <Card>
       <Logo/>
    <About/>
    
   </Card>
   )
};



function Cart() {
  return (
  <div>
    <Logo/>
    <CheckCart/>


  Logo created by <a href="https://www.designevo.com/" title="Free Online Logo Maker">DesignEvo logo maker</a></div>
  )
}

function Styles() {
 
  return (
    <div>
      <Card>
      <Logo/>
    
      </Card>
      </div>
)}
 

