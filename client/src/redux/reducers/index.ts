import { combineReducers } from "redux"
import { ticketsFinance } from "./financialQuotes"

export const rootReducer = combineReducers({
  tickets: ticketsFinance,
})
