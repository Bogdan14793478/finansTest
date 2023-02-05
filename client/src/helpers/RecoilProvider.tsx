import React from "react"
import { RecoilRoot } from "recoil"

type WithChildren = {
  children?: React.ReactNode
}

export const RecoilProvider: React.FC<WithChildren> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>
}
