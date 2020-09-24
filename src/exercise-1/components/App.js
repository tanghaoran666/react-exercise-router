import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom';
import NoMatch from 'react-router-nomatch'
import Home from './Home';
import MyProfile from './MyProfile';
import AboutUs from './AboutUs';
import Header from './Header';
import Products from './Products';
import Product from './Product';
import Data from './../../exercise-2/mockups/data.json'
class App extends Component {
  
  
  render() {
    const products = Data;

  // function product(detail) = detail => {
  //   return Product(detail);  
  // }
    return (
        <Router>
          
          <div className="app">
          <Header />
          <Switch>
            {/* <NoMatch component={Home} /> */}
            <Redirect from='/goods' to='/products' />
            <Route exact path='/' component={Home} />
            <Route exact path='/my-profile' component={MyProfile} />
            <Route exact path='/about-us' component={AboutUs} />
            <Route exact path='/products' component={Products} />
            <Route  path='/products/1' >
              <Product {...products.bicycle} />
            </Route>
            <Route  path='/products/2' >
              <Product {...products.TV} />
            </Route>
            <Route  path='/products/3' >
              <Product {...products.pencil} />
            </Route>
            <Route path="*" component={Home} />
            
          </Switch>
          </div>
        </Router>
      
    );
  }
}

export default App;
