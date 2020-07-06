import React from "react";
import { Route, Switch } from "react-router-dom";
import BasicSquare from "./components/BasicSpring/BasicSpring";
import { MultipleSprings } from "./components/MultipleSprings/MultipleSprings";
import { Trail } from "./components/Trail/Trail";
import { List } from "./components/List/List";
import { Gestures } from "./components/Gestures/Gestures";
import { Navigator } from "./components/Navigator/Navigator";
import {WaypointFade} from "./components/WaypointFade/WaypointFade";

const numbers = [1, 2, 3, 4];

function App() {
  return (
    <Switch>
        <Route path={"/spring-6"}>
            <WaypointFade><Navigator previous={"spring-5"} next={""}/></WaypointFade>
        </Route>
      <Route path={"/spring-5"}>
        <List>
          <Navigator previous={"spring-4"} next={"spring-6"} />{" "}
        </List>
      </Route>
      <Route path={"/spring-4"}>
        <Trail>
          {" "}
          <Navigator previous={"spring-3"} next={"spring-5"} />{" "}
        </Trail>
      </Route>
      <Route path={"/spring-3"}>
        <Gestures numbers={numbers}>
          {" "}
          <Navigator previous={"spring-2"} next={"spring-4"} />{" "}
        </Gestures>
      </Route>
      <Route path={"/spring-2"}>
        <MultipleSprings numbers={numbers}>
          {" "}
          <Navigator previous={""} next={"spring-3"} />{" "}
        </MultipleSprings>
      </Route>
      <Route path={"/"}>
        <BasicSquare numbers={numbers}>
          <Navigator previous={"spring-6"} next={"spring-2"} />
        </BasicSquare>
      </Route>
    </Switch>
  );
}

export default App;
