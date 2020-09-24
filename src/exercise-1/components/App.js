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

class App extends Component {
  
  
  render() {
    const products = [{id:1,
      name:'Bicycle',
      price:30,
      quanity:15,
      desc:'Bicycle is good'

    }
  ]

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
            <Route path="*" component={Home} />
            // {/* <Route  path='/products/1' component={this.product(products[0])} /> */}
          </Switch>
          </div>
        </Router>
      
    );
  }
}

export default App;
