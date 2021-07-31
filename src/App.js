
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useParams
} from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Product from './pages/Product';
import Contacts from './pages/Contacts';
import Shop from './pages/Shop';
import Forms from './components/Forms';
import Products from './components/Products';




function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/about" activeClassName="selected">About</NavLink> <br />
        <Link to="/contact">Contact</Link> <br />
        <Link to="/home">Home</Link> <br />
      </nav>
      <h1>Hello World</h1>
      
      <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      </Switch>


      <nav>
        <Link to="/product">Products</Link> <br />
        <Link to="/shop">Shop</Link> <br />
        <Link to="/contacts">Contacts</Link> <br />
      </nav>
      
      
      <Switch>
      <Route path="/product">
        <Product />
      </Route>
      <Route path="/shop">
        <Shop />
      </Route>
      <Route path="/contacts">
        <Contacts />
      </Route>
      </Switch>


      <Forms/>

      <NavLink to="/products">Products</NavLink>
      <Route path="/products/:id">
        <Products/>
      </Route>


    
    </div>
  );
}

export default App;
