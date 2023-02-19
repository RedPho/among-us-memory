import React from "react";

function Scores(props) {
  return(
    <div>
      <p>Highscore: {props.highScore}</p>
      <p>Score: {props.score}</p>
    </div>
  )
}

export default Scores;