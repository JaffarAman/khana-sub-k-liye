import logo from "./logo.svg";
import "./App.css";
import LogIn from "./screen/LoginScreen";
import { DashboardScreen } from "./screen/DashboardScreen";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RequestScreen from "./screen/RequestScreen";
import CreateManager from "./screen/CreateManager";
import AcceptReq from "./screen/AcceptReq";
import RejectedReq from "./screen/Rejectedscreen";
function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <LogIn />
        </Route>
        <Route path="/dashboard">
          <DashboardScreen />
        </Route>

        <Route path="/requesttab">
          <RequestScreen />
        </Route>

        <Route path="/createmanager">
          <CreateManager />
        </Route>
        <Route path="/acceptreq">
          <AcceptReq />
        </Route>
        <Route path="/rejectreq">
          <RejectedReq />
        </Route>
      </Switch>
    </>
  );
}

export default App;
