import React from "react";
// import AddItem from "./Components/AddItem/";
import Registration from "./Components/Registration";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./Components/SignIn";
import CategoryPage from "./Components/";
import LandingPage from "./Components/Landing Page/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/signIn" component={SignIn} exact />
        <Route path="/CategoryPage" component={CategoryPage} exact />
        <Route path="/Registration" component={Registration} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
