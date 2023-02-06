import { InitialTicketsType } from "../reducers/financialQuotes"
import { ActionTypes } from "./interface"

export type Action2<T, P> = { type: T; payload: P }

export type ActionInitialTicketsType = Action2<
  ActionTypes.SAVE_TICKETS,
  InitialTicketsType
>
export const saveTicketsToStore = (
  payload: InitialTicketsType
): ActionInitialTicketsType => ({
  type: ActionTypes.SAVE_TICKETS,
  payload,
})

export type ActionRemoveTicketType = Action2<ActionTypes.REMOVE_TICKET, string>
export const removeTicket = (payload: string): ActionRemoveTicketType => ({
  type: ActionTypes.REMOVE_TICKET,
  payload,
})

export type ActionAddTicketType = Action2<ActionTypes.ADD_TICKET, string>
export const addNewTicket = (payload: string): ActionAddTicketType => ({
  type: ActionTypes.ADD_TICKET,
  payload,
})
