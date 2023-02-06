import React from "react"
import { Router, Route, Switch } from "react-router-dom"

import { MainPage } from "./components/MainPage/MainPage"
import history from "./helpers/history"

export function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  )
}
