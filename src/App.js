import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import ItemCarousel from './components/item';
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



export default function App() {
  const items = [
    {
    id: 1,
    name: "clothing item 1",
    price: "$ 0.00",
    picture: "img",
    style: "clothing stlye",
    color: "Color"
  }, 
  {
  id: 2,
  name: "clothing item 1",
  price: "$ 0.00",
  picture: "img",
  style: "clothing stlye",
  color: "Color"
}, 
{
id: 3,
name: "clothing item 1",
price: "$ 0.00",
picture: "img",
style: "clothing stlye",
color: "Color"
}
];
return (
  // <Router>
  //   <div>
  //     <Container>
        <div>
        <NavBarHere/>
        <RouterArea/>
        </div>
  //     <Navbar expand="lg" variant="light" bg="light">
  //     <ButtonGroup>
  //       <Button variant="outline-secondary">
  //       <Link to="/home">Home</Link>
  //       </Button>
  //       <Button variant="outline-secondary">
  //       <Link to="/styles">styles</Link>
  //       </Button>
  //       <Button variant="outline-secondary">
  //       <Link to="/cart">Shopping Cart</Link>
  //       </Button>
  //     </ButtonGroup>
  //     <Switch>
  //       <Route path="/styles">
  //           <Styles />
  //       </Route>
  //        <Route path="/cart">
  //           <Cart cart= {"1234"}/>
  //       </Route>
  //       <Route path="/home">
  //           <Home/>
  //       </Route>
  //     </Switch>
  //     </Navbar>
  //     </Container>
  //   </div>
  // </Router>
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



function Cart({ cart }) {
  return (
  <div>
    <Logo/>
  <h2>Total price is.</h2>


  Logo created by <a href="https://www.designevo.com/" title="Free Online Logo Maker">DesignEvo logo maker</a></div>
  )
}

function Styles() {
 
  return (
    <div>
      <Card>
      <Logo/>
      <ItemCarousel/>
      </Card>
      </div>
)}
 

