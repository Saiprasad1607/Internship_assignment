import React from 'react';
import Navbar from './components/Navbar';
import Internship from './components/Internship';
import NotFound from './components/NotFound';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { FirebaseApp } from '@firebase/app';
//import * as firebase from 'firebase';
import "firebase/firestore";
import EditUser from './components/EditUser';
import {Link } from 'react-router-dom';




function App() {



  return (
    <Router>
      <Navbar/>
      <Switch/>
        <Route  path="/" exact component={Internship} />
        <Route  path="/all" exact component={AllUsers} />
        <Route  path="/add" exact component={AddUser} />
        <Route path="/edit/:id" component={EditUser} />
      <Switch/>
        
      
    </Router>
  );
}

export default App;
