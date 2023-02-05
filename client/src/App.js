import React from "react"
import { Router, Route, Switch } from "react-router-dom"

import { MainPage } from "./components/MainPage/MainPage"
import { RecoilProvider } from "./helpers/RecoilProvider"
import history from "./helpers/history"

export function App() {
  return (
    <Router history={history}>
      <RecoilProvider>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </RecoilProvider>
    </Router>
  )
}
