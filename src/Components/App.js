import React, { Component, Fragment } from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Exercises from "./Exercises";
import { muscles, exercises } from "../store.js";

class App extends Component {
  state = {
    exercises,
    category: ''
  };

  getExerciseByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  }

  handleCategorySelected(category) {
    this.setState ({
      category
    })
  }




  render() {
    const exercises = this.getExerciseByMuscles(),
    {category} = this.state;
    return (
      <Fragment>
        <Header />
        <Exercises exercises={exercises} category={category} />
        <Footer muscles={muscles} onSelect={this.handleCategorySelected.bind(this)} category={category} />
      </Fragment>
    );
  }
}

export default App;
