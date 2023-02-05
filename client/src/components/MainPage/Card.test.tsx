import React from "react"
import ReactDOM from "react-dom"

import { Card } from "./Card"

const ticketData = {
  ticker: "AAPL",
  exchange: "NASDAQ",
  price: 279.29,
  change: 64.52,
  change_percent: 0.84,
  dividend: 0.56,
  yield: 1.34,
  last_trade_time: "2021-04-30T11:53:21.000Z",
}

it("renders Card  without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Card item={ticketData} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
