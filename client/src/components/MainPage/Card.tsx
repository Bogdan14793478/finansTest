/* eslint-disable no-useless-concat */
/* eslint-disable prefer-template */
import React from "react"
import { displayPercent, formatCurrency } from "../../helpers/helpers"
import { InformationQuotationsType } from "../../states"
import { DecodeName, Validity } from "./types"

interface CardProps {
  item: InformationQuotationsType
}

export const Card: React.FC<CardProps> = ({ item }) => {
  const colorBackground = item.ticker
  const company = item.ticker
  const changeValidity = item.change_percent > 0 ? Validity.Green : Validity.Red
  const changeDividend = item.dividend > 0 ? Validity.Green : Validity.Red
  const changeIncome = item.yield > 0 ? Validity.Green : Validity.Red

  return (
    <div className="line-container">
      <p className={`comp-name ${colorBackground}`}>{item.ticker}</p>
      {company && (
        <p className="line-company-name">
          {DecodeName[company as keyof typeof DecodeName]}
        </p>
      )}
      <p className="line-price">{formatCurrency(item.price)}</p>
      <p className={`percent ${changeValidity}`}>
        {displayPercent(item.change_percent)}
      </p>
      <p>
        Dividend:{" "}
        <span className={`devident ${changeDividend}`}> {item.dividend}</span>
      </p>
      <p>
        Income: <span className={`devident ${changeIncome}`}> {item.yield}</span>
      </p>
    </div>
  )
}
