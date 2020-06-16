import React from "react";
import { Route, Switch } from "react-router-dom";
import BasicSquare from "./components/BasicSpring/BasicSpring";
import { MultipleSprings } from "./components/MultipleSprings/MultipleSprings";
import { Gestures } from "./components/Gestures/Gestures";

const numbers = [1, 2, 3, 4];

function App() {
  return (
    <Switch>
      <Route path={"/spring-3"}>
        <Gestures numbers={numbers} />
      </Route>
      <Route path={"/spring-2"}>
        <MultipleSprings numbers={numbers} />
      </Route>
      <Route path={"/"}>
        <BasicSquare numbers={numbers} />
      </Route>
    </Switch>
  );
}

export default App;
