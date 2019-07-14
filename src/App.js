import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreator from "./store/actions/actions";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>{this.props.num}</h1>
        <button style={{ width: "50px" }} onClick={this.props.numUp}>
          +
        </button>
        <br />
        <button style={{ width: "50px" }} onClick={this.props.numDown}>
          -
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    num: state.num
  };
};

const mapDispatchToProps = dispatch => {
  return {
    numUp: () => dispatch(actionCreator.btnUp()),
    numDown: () => dispatch(actionCreator.btnDown())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
