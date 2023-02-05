import React from "react"
import "./Loader.css"

export const Loader = () => {
  return (
    <div className="my-loader">
      <div className="lds-ring">
        <span>Load data</span>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}
