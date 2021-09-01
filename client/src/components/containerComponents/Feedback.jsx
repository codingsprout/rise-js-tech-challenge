import React from "react";
import incorrect from "../../images/xmark.svg";
import correct from "../../images/checkmark.svg";

class FeedbackContainer extends React.Component {
  render() {
    return (
      <div className="feedbackWrapper">
        <div className="content">
          <div className="iconContainer">
            <img
              src={this.props.isCorrectChoice ? correct : incorrect}
              alt={this.props.isCorrectChoice ? "checkmark" : "x"}
            />
          </div>
          <p className="feedbackHeader">
            {this.props.isCorrectChoice ? "Correct" : "Incorrect"}
          </p>
          <p className="feedbackText">{this.props.feedback}</p>
        </div>
      </div>
    );
  }
}

export default FeedbackContainer;
