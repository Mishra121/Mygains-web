import React, {Suspense} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { MuiThemeProvider, CssBaseline } from "@material-ui/core";

import { AuthProvider } from "./context/AuthState";

import PrivateRoute from "./components/PrivateRoute";

import theme from "./theme";
import GlobalStyles from "./GlobalStyles";

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/LogIn';
import SignUp from './components/SignUp';
import Plans from './components/Plans';
import NotFound from './components/NotFound';
import Blogs from './components/Blogs/Blogs';

const UserDietPlan = React.lazy(() => import('./components/Plans/UserDietPlan'));
const BlogById = React.lazy(() => import('./components/Blogs/BlogById'));

function UserDietPlanComp() {
  return (
    <>
      <Suspense fallback={<h4>Loading...</h4>}>
        <UserDietPlan />
      </Suspense>
    </>
  )
}

function SingleBlog() {
  return (
    <>
      <Suspense fallback={<h4>Loading...</h4>}>
        <BlogById />
      </Suspense>
    </>
  )
}

function App() {
  return (
    <AuthProvider>
    <Router>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <>
        <Header/>
        <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/plans" component={Plans} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/blogs/:id" component={SingleBlog} />
          <PrivateRoute exact path="/user-defined-plan" component={UserDietPlanComp} />
          <Route component={NotFound} />
        </Switch>
        </div>
        <Footer />
      </>
    </MuiThemeProvider>
    </Router>
    </AuthProvider>
  );
}

export default App;
