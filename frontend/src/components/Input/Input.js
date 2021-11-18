import React, { Component, useState } from 'react';
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player'
import axios from 'axios';

function Input(){

  const [words, setWords] = useState("");

  let { id } = useParams();
  console.log(id)

  const [et, setEt] = useState("");

  axios
    .post('/api/experiment/getEt', {id: id})
    .then(res => {
      setEt(res.data.experiment_type)
    })
    .catch(err => {
      console.log("Error in Submitting Game!", err);
    })

  async function onChange(e){
    await setWords(e.target.value);
    console.log(words)
  };

  function proceed(){
    axios
      .post('/api/experiment/updateWords', {id: id, words: words})
      .then(res => {
        setWords("");
        console.log(res);
        window.location.href = '/final/'+id;
      })
      .catch(err => {
        console.log("Error in Submitting Words!", err);
      })
    window.location.href = '/final/'+id;
  }

  return (
    <div className="container text-center p-5">
      <h1>{et == 2 || et == 3 ? "STEP 2/3" : "STEP 3/4" }: RECALL WORDS</h1>
      <p> Thank you for being part of this experiment. The experiment is a part of a project being done by IIIT-H students to study the effects of word memorability. The experiment will take around 5 minutes to complete. We appreciate your patience and time taken to be part of this experiment.</p>
      <br/>
      <p>Try to recall as many words as you can and enter them in the box below (space separated). Press the PROCEED Button once you are done.</p>

      <div className="m-5">
        <textarea className="input-area" value={words} onChange={onChange}/>
      </div>

      <button className="btn btn-success" onClick={proceed}> PROCEED </button>

    </div>
  );
}

export default Input;