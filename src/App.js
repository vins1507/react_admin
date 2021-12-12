import React from "react";
import Sidebar from "./components/SideBar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import './App.css'
import Home from "./components/Pages/Home/Home";
import { BrowserRouter as Router, Switch,  Route} from "react-router-dom";
import UserList from "./components/Pages/UserList/UserList";
import User from "./components/Pages/User/User";
import NewUser from "./components/Pages/newUser/NewUser";
import ProductList from "./components/Pages/ProductList/ProductList";
import Product from "./components/Pages/Product/Product";
import NewProduct from "./components/Pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className='container'>
      <Sidebar/>
      <Switch>
      <Route exact path='/'>      
      <Home/>
      </Route>
      <Route path='/users'>      
      <UserList/>
      </Route>
      <Route path='/user/:userId'>      
      <User/>
      </Route>
      <Route path='/newUser'>
      <NewUser/>
      </Route>
      <Route path='/products'>      
      <ProductList/>
      </Route>
      <Route path='/product/:productsId'>      
      <Product/>
      </Route>
      <Route path='/newProduct'>
      <NewProduct/>
      </Route>

      
      
      </Switch>
      </div>
    </Router>
  );
}

export default App;
