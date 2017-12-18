import PropTypes from "prop-types"
import React from "react"
import { push } from "react-router-redux"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

const Home = ({ changePage }) => (
  <div>
    <h1>Home</h1>
    <p>Welcome home!</p>
    <button onClick={() => changePage()}>Go to about page via redux</button>
  </div>
)

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push("/about-us")
    },
    dispatch
  )

Home.propTypes = {
  changePage: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(Home)
