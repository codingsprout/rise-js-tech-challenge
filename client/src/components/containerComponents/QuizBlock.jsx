import React from "react";

class QuizBlockContainer extends React.Component {
  render() {
    return (
      <div className="questionContainer">
        <p className="questionText">{this.props.question}</p>
        <img src={this.props.imgSrc} alt="text" />
      </div>
    );
  }
}

export default QuizBlockContainer;
