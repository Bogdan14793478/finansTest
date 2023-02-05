import React from "react"
import { displayPercent, formatCurrency } from "../../helpers/helpers"
import { InformationQuotationsType } from "../../states"
import { DecodeName, Validity } from "./types"

interface CardProps {
  item: InformationQuotationsType
}

export const Card: React.FC<CardProps> = ({ item }) => {
  // eslint-disable-next-line operator-linebreak
  const changeViewBackground =
    item.change_percent > 0 && item.dividend > 0 && item.yield > 0
      ? Validity.Green
      : Validity.Red

  return (
    <div className="line-container">
      {item.ticker && (
        <>
          <p className={`comp-name ${item.ticker}`}>{item.ticker}</p>
          <p className="line-company-name">
            {DecodeName[item.ticker as keyof typeof DecodeName]}
          </p>
        </>
      )}
      {item.price && <p className="line-price">{formatCurrency(item.price)}</p>}
      {item.change_percent && (
        <p className={`percent ${changeViewBackground}`}>
          {displayPercent(item.change_percent)}
        </p>
      )}
      {item.dividend && (
        <p>
          Dividend:
          <span className={`dividend ${changeViewBackground}`}>{item.dividend}</span>
        </p>
      )}
      {item.yield && (
        <p>
          Income:
          <span className={`dividend ${changeViewBackground}`}> {item.yield}</span>
        </p>
      )}
    </div>
  )
}
