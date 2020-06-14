import React from "react";
import { Route, Switch } from "react-router-dom";
import BasicSquare from "./components/BasicSpring/BasicSpring";
import { MultipleSprings } from "./components/MultipleSprings/MultipleSprings";

function App() {
  return (
    <Switch>
      <Route path={"/spring-2"}>
        <MultipleSprings />
      </Route>
      <Route path={"/"}>
        <BasicSquare />
      </Route>
    </Switch>
  );
}

export default App;
