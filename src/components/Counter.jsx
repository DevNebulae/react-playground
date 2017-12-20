import PropTypes from "prop-types"
import React from "react"

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) => (
  <div>
    <button onClick={onIncrement}>Increment</button>{" "}
    <button onClick={onDecrement}>Decrement</button>{" "}
    <button onClick={onIncrementAsync}>Increment after 1 second</button>{" "}
    <span>Clicked {value} times</span>
  </div>
)

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired
}

export default Counter
