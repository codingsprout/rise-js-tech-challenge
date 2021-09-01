import React from "react";

import CheckBlockContainer from "./components/CheckBlockContainer";

class App extends React.Component {
  state = {
    quizzes: [],
  };

  // grab data from backend (better if protected from backend to start)
  // in fact store it in env or another variable to carry it

  componentDidMount() {
    fetch("http://localhost:5000/knowledge-check-blocks")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ quizzes: data });
      });
  }

  // when using map, usually second arg is index, but added static id
  // on the index file on server side and used that instead over here

  render() {
    return (
      <div className="App">
        {this.state.quizzes.map((quiz) => (
          <CheckBlockContainer key={quiz.id} question={quiz} />
        ))}
      </div>
    );
  }
}

export default App;
