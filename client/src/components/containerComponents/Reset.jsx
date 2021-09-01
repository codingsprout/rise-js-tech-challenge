import React from "react";
import resetBtn from "../../images/reset-button.svg";

class ResetContainer extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <button className="inner" onClick={this.props.resetQuestion}>
          <p className="text">Take Again</p>
          <img className="icon" src={resetBtn} alt="Reset quiz" />
        </button>
      </div>
    );
  }
}

export default ResetContainer;
