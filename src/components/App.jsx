import React from "react"
import { Route, Link } from "react-router-dom"
import Home from "../containers/Home"
import About from "../containers/About"
import Counter from "../containers/Counter"

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Counter />
    </main>
  </div>
)

export default App
