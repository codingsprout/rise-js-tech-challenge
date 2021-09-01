import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Animation from "react-animate-height";

import { Feedback, ChoiceContainer, Quiz, Reset } from "./containerComponents";

const CheckBlockContainer = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [choice, setChoice] = useState(null);

  const answer = props.question.answers.filter(
    (correct) => correct.isCorrect === true
  );

  const isCorrectChoice = choice === answer[0].id;

  const resetQuiz = () => {
    setIsSubmitted(false);
    setChoice(null);
  };
  const nodeRef = useRef(null);

  return (
    <div className="container">
      <Quiz
        imgSrc={props.question.question.media.url}
        question={props.question.question.text}
      />
      <ChoiceContainer
        answers={props.question.answers}
        userChoice={choice}
        changeChoice={setChoice}
        isSubmitted={isSubmitted}
        correctAnswer={answer[0].text}
      />
      <CSSTransition
        nodeRef={nodeRef}
        in={!isSubmitted}
        timeout={200}
        classNames="submitButton"
      >
        <button
          className={`submitButton${!choice ? " disabled" : ""}`}
          onClick={() => setIsSubmitted(true)}
          disabled={!choice}
          ref={nodeRef}
        >
          Submit
        </button>
      </CSSTransition>
      <Animation duration={500} height={isSubmitted ? "auto" : 0}>
        <CSSTransition
          nodeRef={nodeRef}
          in={isSubmitted}
          timeout={1200}
          classNames="feedbackBlock"
        >
          <div ref={nodeRef}>
            <Feedback
              feedback={props.question.feedback}
              isCorrectChoice={isCorrectChoice}
            />
            <Reset resetQuestion={resetQuiz} />
          </div>
        </CSSTransition>
      </Animation>
    </div>
  );
};

export default CheckBlockContainer;
