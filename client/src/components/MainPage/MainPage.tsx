import { useCallback, useEffect } from "react"
import io from "socket.io-client"
import { useDispatch } from "react-redux"
import { v4 as uuidv4 } from "uuid"
import { Card } from "./Card"

import "./styles.css"

import { Loader } from "../Loader/Loader"
import { InformationQuotationsType } from "./types"
import {
  addNewTicket,
  removeTicket,
  saveTicketsToStore,
} from "../../redux/actions/typeActionQuotes"
import { useAppSelector } from "../../hooks"

export const MainPage = () => {
  const dispatch = useDispatch()
  const { tickets, isLoading, hiddenTicket } = useAppSelector(state => state.tickets)

  const text = "Вас это может заинтересовать"

  const hideTicket = useCallback(
    (ticket: string) => {
      dispatch(removeTicket(ticket))
    },
    [dispatch]
  )

  const addToTicket = (ticket: string) => {
    dispatch(addNewTicket(ticket))
  }

  useEffect(() => {
    const socket = io("http://localhost:4000/")
    socket.on("res-ticket", data => {
      dispatch(saveTicketsToStore(data))
    })
  }, [dispatch])

  return (
    <div className="container">
      {tickets && isLoading && (
        <>
          <div>{text}</div>
          {tickets.map((item: InformationQuotationsType) => (
            <div key={uuidv4()}>
              <Card item={item} hideTicket={hideTicket} />
            </div>
          ))}
        </>
      )}
      {hiddenTicket.map((item: string) => (
        <div className="add-ticket" key={uuidv4()}>
          <p>{item}</p>
          <button
            className="btn-ticket"
            type="button"
            onClick={() => addToTicket(item)}
          >
            +
          </button>
        </div>
      ))}
      {!isLoading && <Loader />}
    </div>
  )
}
