import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Welcome from "./Components/Welcome/Welcome";
import Form from "./Components/Form/Form";
import "./styles/global.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome" component={Welcome} />
        <Route path="/form" component={Form} />
      </Switch>
    </Router>
  );
}

export default App;
