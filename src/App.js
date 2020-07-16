import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/LogIn';
import SignUp from './components/SignUp';
import Plans from './components/Plans';
import Shop from './components/Shop';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
    <>
      <Header />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/plans" component={Plans} />
        <Route exact path="/shop" component={Shop} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </>
    </Router>
  );
}

export default App;
