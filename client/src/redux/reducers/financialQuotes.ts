/* eslint-disable no-case-declarations */

import { ActionTypes } from "../actions/interface"

export interface TicketsType {
  ticker: string
  exchange: string
  price: number
  change: number
  change_percent: number
  dividend: number
  yield: number
  last_trade_time: string
}

export interface InitialTicketsType {
  copyTickets: TicketsType[]
  tickets: TicketsType[]
  isLoading: boolean
  hiddenTicket: string[]
}

const initial: InitialTicketsType = {
  copyTickets: [],
  tickets: [],
  isLoading: false,
  hiddenTicket: [],
}

export const ticketsFinance = (state = initial, action: any): InitialTicketsType => {
  switch (action.type) {
    case ActionTypes.SAVE_TICKETS:
      const copyHideTicket = [...state.hiddenTicket]
      const filteredTickets = action.payload.filter(
        (item: TicketsType) => !copyHideTicket.includes(item.ticker)
      )
      return {
        ...state,
        tickets: filteredTickets,
        copyTickets: action.payload,
        isLoading: true,
      }
    case ActionTypes.REMOVE_TICKET:
      const copyStateTickets = [...state.tickets]
      const copyhideTicket = [...state.hiddenTicket, action.payload]
      const filteredWIthRemoveTickets = copyStateTickets.filter(
        (item: TicketsType) => !copyhideTicket.includes(item.ticker)
      )
      return {
        ...state,
        hiddenTicket: [...state.hiddenTicket, action.payload],
        tickets: filteredWIthRemoveTickets,
      }
    case ActionTypes.ADD_TICKET:
      const copyhiddenTicket = [...state.hiddenTicket]
      const index = copyhiddenTicket.indexOf(action.payload)
      if (index > -1) {
        copyhiddenTicket.splice(index, 1)
      }
      const newTickets = state.copyTickets.filter(
        (item: TicketsType) => !copyhiddenTicket.includes(item.ticker)
      )
      return {
        ...state,
        hiddenTicket: copyhiddenTicket,
        tickets: newTickets,
      }
    default:
      return state
  }
}
