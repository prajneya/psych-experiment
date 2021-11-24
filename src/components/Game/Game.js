import React from "react";
import { useParams } from "react-router-dom";
import "./Game.css";

function Game() {
  let { id } = useParams();
  console.log(id);

  function proceed() {
    window.location.href = "/video/" + id;
  }

  return (
    <div className="container text-center p-5">
      <h1>STEP 1/4: PLAY THE FOLLOWING GAME</h1>
      <p>
        {" "}
        Thank you for being part of this experiment. The experiment is a part of
        a project being done to study the effects playing games on word
        memorability. The experiment will take around 5 minutes to complete. We
        appreciate your patience and time taken to be part of this experiment.
      </p>
      <br />
      <p>
        <b>
          Please play the following game at least once. Press the PROCEED Button
          once you are done.
        </b>
      </p>

      <iframe
        title="game"
        className="gameArea"
        src="https://snake.io/"
        frameBorder="0"
        scrolling="no"
      ></iframe>
      <br />
      <button className="btn btn-success" onClick={proceed}>
        {" "}
        PROCEED{" "}
      </button>
    </div>
  );
}

export default Game;
