import { atom } from "recoil"

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

export const informationAboutQuotations = atom<InformationQuotationsType[]>({
  key: "informationAboutQuotations",
  default: undefined,
})

export const filteredInformationAboutQuotations = atom<string[]>({
  key: "filteredInformationAboutQuotations",
  default: [],
})
