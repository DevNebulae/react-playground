import "babel-polyfill"

import { ConnectedRouter } from "react-router-redux"
import { Provider } from "react-redux"
import { render } from "react-dom"
import App from "./containers/App"
import React from "react"
import store, { history } from "./store"

document.addEventListener("DOMContentLoaded", () => {
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <App />
        </div>
      </ConnectedRouter>
    </Provider>,
    document.getElementById("react-root")
  )
})
