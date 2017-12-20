import { increment, decrement, incrementAsync } from "../actions/counter"
import { connect } from "react-redux"
import Counter from "../components/Counter"

const mapStateToProps = state => ({
  value: state.count
})

const mapDispatchToProps = {
  onIncrement: increment,
  onDecrement: decrement,
  onIncrementAsync: incrementAsync
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default CounterContainer
