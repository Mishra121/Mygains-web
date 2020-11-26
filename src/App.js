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
import Blogs from './components/Blogs/Blogs';

// Lazy Loaded components
const Login = React.lazy(() => import('./components/LogIn'));
const SignUp = React.lazy(() => import('./components/SignUp'));
const Plans = React.lazy(() => import('./components/Plans'));
const NotFound = React.lazy(() => import('./components/NotFound'));

const UserDietPlan = React.lazy(() => import('./components/Plans/UserDietPlan'));
const BlogById = React.lazy(() => import('./components/Blogs/BlogById'));

function LoginComp() {
  return (
    <>
      <Suspense fallback={<h4>Loading...</h4>}>
        <Login />
      </Suspense>
    </>
  )
}

function SignUpComp() {
  return (
    <>
      <Suspense fallback={<h4>Loading...</h4>}>
        <SignUp />
      </Suspense>
    </>
  )
}


function PlansComp() {
  return (
    <>
      <Suspense fallback={<h4>Loading...</h4>}>
        <Plans />
      </Suspense>
    </>
  )
}

function NotFoundComp() {
  return (
    <>
      <Suspense fallback={<h4>Loading...</h4>}>
        <NotFound />
      </Suspense>
    </>
  )
}

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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginComp} />
          <Route exact path="/signup" component={SignUpComp} />
          <Route exact path="/plans" component={PlansComp} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/blogs/:id" component={SingleBlog} />
          <PrivateRoute exact path="/user-defined-plan" component={UserDietPlanComp} />
          <Route component={NotFoundComp} />
        </Switch>
        <Footer />
      </>
    </MuiThemeProvider>
    </Router>
    </AuthProvider>
  );
}

export default App;
