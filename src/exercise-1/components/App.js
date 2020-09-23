import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Home';
import MyProfile from './MyProfile';
import AboutUs from './AboutUs';
import Header from './Header';
import Products from './Products';
import Product from './Product';

class App extends Component {
  render() {
    const products = [{id:1,
      name:'Bicycle',
      price:30,
      quanity:15,
      desc:'Bicycle is good'

    }
  ]
    return (
        <Router>
          <div className="app">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route  path='/my-profile' component={MyProfile} />
            <Route  path='/about-us' component={AboutUs} />
            <Route  path='/products' component={Products} />
            <Route  path='/products/1' component={Product(products[0])} />
          </Switch>
          </div>
        </Router>
      
    );
  }
}

export default App;
