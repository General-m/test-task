import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Routes } from "./constants/Routes";
import "./App.css";
import { Profile } from "./pages/Profile/Profile";
import { Main } from "./pages/Main/Main";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path={Routes.PROFILE} component={Profile} />
          <Route path={Routes.MAIN} component={Main} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
