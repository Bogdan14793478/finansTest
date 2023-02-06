/* eslint-disable no-shadow */
export type InformationQuotationsType = {
  ticker: string
  exchange: string
  price: number
  change: number
  change_percent: number
  dividend: number
  yield: number
  last_trade_time: string
}

export enum DecodeName {
  AAPL = "Apple",
  GOOGL = "Google",
  MSFT = "Microsoft",
  AMZN = "Amazon",
  FB = "Flib",
  TSLA = "Tesla",
}

export enum Validity {
  Red = "red",
  Green = "green",
}
