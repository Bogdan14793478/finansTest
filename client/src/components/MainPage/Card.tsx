import React from "react"
import { displayPercent, formatCurrency } from "../../helpers/helpers"
import { TicketsType } from "../../redux/reducers/financialQuotes"
import { DecodeName, Validity } from "./types"

interface CardProps {
  item: TicketsType
  hideTicket: (name: string) => void
}

export const Card: React.FC<CardProps> = ({ item, hideTicket }) => {
  // eslint-disable-next-line operator-linebreak
  const changeViewBackground =
    item.change_percent > 0 && item.dividend > 0 && item.yield > 0
      ? Validity.Green
      : Validity.Red

  return (
    <div className="line-container">
      <>
        <p className={`comp-name ${item.ticker}`}>{item.ticker}</p>
        <p className="line-company-name">
          {DecodeName[item.ticker as keyof typeof DecodeName]}
        </p>
      </>
      <p className="line-price">{formatCurrency(item.price)}</p>
      <p className={`percent ${changeViewBackground}`}>
        {displayPercent(item.change_percent)}
      </p>
      <p>
        Dividend:
        <span className={`dividend ${changeViewBackground}`}>{item.dividend}</span>
      </p>
      <p>
        Income:
        <span className={`dividend ${changeViewBackground}`}> {item.yield}</span>
      </p>
      <button
        className="btn-ticket"
        type="button"
        onClick={() => hideTicket(item.ticker)}
      >
        -
      </button>
    </div>
  )
}
