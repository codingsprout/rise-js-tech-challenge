import React from "react";
import { CSSTransition } from "react-transition-group";

class ChoiceContainer extends React.Component {
  checkSubmit = () =>
    this.props.isSubmitted
      ? null
      : this.props.changeChoice(this.props.answer.id);

  render() {
    return (
      <div
        className={`optionWrapper${this.props.isSubmitted ? " disabled" : ""}`}
        onClick={this.checkSubmit}
        role="button"
        tabIndex={0}
        data-chosen-answer={this.props.isCorrect}
        id={`radioInput${this.props.isSubmitted ? "submitted" : ""}`}
      >
        <label>
          <input
            type="radio"
            name={`option-${this.props.answer.id}`}
            value={this.props.answer.id}
            checked={this.props.userChoice === this.props.answer.id}
            onChange={() => this.props.changeChoice(this.props.answer.id)}
            className="radioInput"
            disabled={this.props.isSubmitted}
          />
          <div
            className={`radioInput${
              this.props.isSubmitted ? " submitted" : ""
            }`}
            data-correct-answer={this.props.isCorrect}
          />

          {this.props.answer.text}
        </label>
        <CSSTransition
          in={
            this.props.isSubmitted &&
            this.props.isCorrect === this.props.answer.id
          }
          timeout={1500}
          classNames="optionBorder"
        >
          <div className="border" />
        </CSSTransition>
      </div>
    );
  }
}

export default ChoiceContainer;
