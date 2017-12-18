import "babel-polyfill"

import App from "./components/App"
import React from "react"
import { render } from "react-dom"

document.addEventListener("DOMContentLoaded", () => {
  render(<App />, document.getElementById("react-root"))
})
