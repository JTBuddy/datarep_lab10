import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

//importing the js classes from the components folder
//import { Header } from './components/header';
//import { Footer } from './components/footer';
import { Content } from './components/content';
import { Read } from './components/read';
import { Create } from './components/create';
import { Edit } from './components/edit';

//importing bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
//importing required elements for the navbar
import { Navbar, Nav } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


//Changed the existing function to a class
class App extends Component {
  //Render method
  render() {
    return (
      <Router>
        <div className="App">

          {/* Navigation Bar */}
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>

          <br />

          {/* Putting the different components on separate pages */}
          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/create' component={Create}  />
            <Route path='/read' component={Read}  />
            <Route path='/edit/:id' component={Edit} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
