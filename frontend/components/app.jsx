import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import GreetingContainer from "./greeting/greeting_container";
import Footer from '../components/footer/footer'
import CartContainer from './cart/cart_container';
import ProductIndexContainer from './products/product_index_container'
import ProductShowContainer from './products/product_show_container'

import Splash from "./splash/splash"
import { AuthRoute, ProtectedRoute } from "../util/route_util";

// import SearchContianer from './search/search_contianer';

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
   <Switch> 
     {/* <Route exact path="/products/coffee" component={CoffeeIndexContainer} /> */}
     {/* <Route exact path="/products/brewing" component={BrewingIndexContainer} /> */}
     {/* <Route exact path="/products/seasonal" component={SeasonalIndexContainer} /> */}
      <Route exact path='/products/:id' component={ProductShowContainer}/>
      <Route exact path='/products' component={ProductIndexContainer} />
      <Route exact path="/cart" component={CartContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={Splash} />
    </Switch>
    <Footer />
  </div>
);

export default App;

  // <div>
  //   <header>
  //     <GreetingContainer />
  //   </header>
  //   <h1>brewBottle</h1>
  //   <Route exact path="/login" component={LogInFormContainer} />
  //   <Route exact path="/signup" component={SignUpFormContainer} />
  // 
  // </div>;