import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from './Components/SignIn';
import history from './Config/history';
import CategoryPage from './Components/'
import LandingPage from "./Components/Landing Page/";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/signIn" component={SignIn} exact />
          <Route path="/CategoryPage" component={CategoryPage} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
