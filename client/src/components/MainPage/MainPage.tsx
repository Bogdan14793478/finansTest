import { useEffect, useState } from "react"
// import { useRecoilState, useRecoilValue } from "recoil"
import io from "socket.io-client"
import { v4 as uuidv4 } from "uuid"
import { InformationQuotationsType } from "../../states"
// import { InformationQuotationsType, informationAboutQuotations } from "../../states"
import { Card } from "./Card"

import "./styles.css"

import { Loader } from "../Loader/Loader"

export const MainPage = () => {
  // work with state
  // const [, setValue] = useRecoilState(informationAboutQuotations)

  // const tickets = useRecoilValue(informationAboutQuotations)

  // useEffect(() => {
  //   const socket = io("http://localhost:4000/")
  //   socket.on("res-ticket", data => {
  //     setValue(data)
  //   })
  // }, [setValue])

  const [state, setState] = useState<undefined | InformationQuotationsType[]>(
    undefined
  )

  useEffect(() => {
    const socket = io("http://localhost:4000/")
    socket.on("res-ticket", data => {
      setState(data)
    })
  }, [])

  return (
    <div className="container">
      {state && (
        <>
          <div>Вас это может заинтерисовать</div>
          {state.map((item: InformationQuotationsType) => (
            <div key={uuidv4()}>
              <Card item={item} />
            </div>
          ))}
        </>
      )}
      {!state && <Loader />}
    </div>
  )
}
