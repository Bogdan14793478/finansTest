import { useCallback, useEffect, useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import io from "socket.io-client"
import { v4 as uuidv4 } from "uuid"
import { InformationQuotationsType, informationAboutQuotations } from "../../states"
import { Card } from "./Card"

import "./styles.css"

import { Loader } from "../Loader/Loader"

export const MainPage = () => {
  const [, setStateInformationQuotations] = useRecoilState(
    informationAboutQuotations
  )

  const [filterElemTicket, setfilterElemTicket] = useState<string[]>([])

  const informationQuotations = useRecoilValue(informationAboutQuotations)

  const text = "Вас это может заинтересовать"

  const hideTicket = useCallback((ticket: string) => {
    setfilterElemTicket(prev => [...prev, ticket])
  }, [])

  const addToTicket = (ticket: string) => {
    const index = filterElemTicket.indexOf(ticket)
    if (index > -1) {
      filterElemTicket.splice(index, 1)
    }
  }

  useEffect(() => {
    const socket = io("http://localhost:4000/")
    socket.on("res-ticket", data => {
      setStateInformationQuotations(data)
    })
  }, [setStateInformationQuotations])

  return (
    <div className="container">
      {informationQuotations && (
        <>
          <div>{text}</div>
          {informationQuotations
            .filter(item => !filterElemTicket.includes(item.ticker))
            .map((item: InformationQuotationsType) => (
              <div key={uuidv4()}>
                <Card item={item} hideTicket={hideTicket} />
              </div>
            ))}
        </>
      )}
      {filterElemTicket.map((item: string) => (
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
      {!informationQuotations && <Loader />}
    </div>
  )
}
