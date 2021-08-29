import React, { Suspense } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import "./App.css";

const CounterComponent = React.lazy(() => import("../Counter"));
const RobotComponent = React.lazy(() => import("../Robot"));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<span>Loading...</span>}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/counter" />
            </Route>
            <Route path="/counter" component={CounterComponent} />
            <Route path="/robot" component={RobotComponent} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
