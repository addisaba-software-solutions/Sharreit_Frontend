import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from './Components/SignIn';
import LandingPage from './Components/Landing Page/LandingPage';
import history from './Config/history';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/signIn" component={SignIn} exact />

        </Switch>
      </BrowserRouter>
    );
  }
}


// function mapStateToProps(state) {
//   return {
//     isLogin: state.loginReducer.isLogin,
//   };
// }

// export default connect(mapStateToProps)(App);
export default App;
