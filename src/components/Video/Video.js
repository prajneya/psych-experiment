import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";

function Video() {
  let { id } = useParams();
  console.log(id);

  const [et, setEt] = useState("");

  axios
    .post("/api/experiment/getEt", { id: id })
    .then((res) => {
      setEt(res.data.experiment_type);
    })
    .catch((err) => {
      console.log("Error in Submitting Game!", err);
    });

  function proceed() {
    window.location.href = "/input/" + id;
  }

  return (
    <div className="container text-center p-5">
      <h1>
        {et === 2 || et === 3 ? "STEP 1/3" : "STEP 2/4"} : WATCH THE FOLLOWING
        VIDEO
      </h1>
      <p>
        {" "}
        Thank you for being part of this experiment. The experiment is a part of
        a project being done by IIIT-H students to study the effects of word
        memorability. The experiment will take around 5 minutes to complete. We
        appreciate your patience and time taken to be part of this experiment.
      </p>
      <br />
      <p>
        <b>
          Please view the following video only once. Try to remember as many
          words as you can. Press the PROCEED Button once you are done.
        </b>
      </p>

      <div className="m-5">
        {et === 1 || et === 3 ? (
          <ReactPlayer
            className="videoPlayer"
            url="https://youtu.be/RhqYtiwEn2Q"
          />
        ) : (
          <ReactPlayer
            className="videoPlayer"
            url="https://youtu.be/fxUvN8O8dX0"
          />
        )}
      </div>
      <br />
      <button className="btn btn-success" onClick={proceed}>
        {" "}
        PROCEED{" "}
      </button>
    </div>
  );
}

export default Video;
