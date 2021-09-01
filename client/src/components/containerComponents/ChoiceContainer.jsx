import React from "react";

import Choice from "./Choice";

class ChoicesContainer extends React.Component {
  render() {
    return (
      <div className="optionsContainer">
        {this.props.answers.map((answer) => (
          <Choice
            key={answer.id}
            answer={answer}
            userChoice={this.props.userChoice}
            changeChoice={this.props.changeChoice}
            isSubmitted={this.props.isSubmitted}
            isCorrect={answer.isCorrect}
          />
        ))}
      </div>
    );
  }
}

export default ChoicesContainer;
