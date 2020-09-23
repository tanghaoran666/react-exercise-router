import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Home';
import MyProfile from './MyProfile';
import AboutUs from './AboutUs';
import Header from './Header';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="app">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route  path='/my-profile' component={MyProfile} />
            <Route  path='/about-us' component={AboutUs} />
          </Switch>
          </div>
        </Router>
      
    );
  }
}

export default App;
