import React, { Component, useState } from 'react';
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player'
import axios from 'axios';

function Final(){

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

  function proceed(){
    var chosen_game = "";

    var ele = document.getElementsByName('game');

    for(var i = 0; i < ele.length; i++) {
        if(ele[i].checked){
          chosen_game = ele[i].value;
          break;
        }
    }

    if(chosen_game!=""){
      axios
        .post('/api/experiment/updateGame', {id: id, game_chosen: chosen_game})
        .then(res => {
          console.log(res);
          window.location.href = '/thanks/';
        })
        .catch(err => {
          console.log("Error in Submitting Game!", err);
        })
      window.location.href = '/thanks/';
    }


  }

  return (
    <div className="container text-center p-5">
      <h1>{et == 2 || et == 3 ? "STEP 3/3" : "STEP 4/4" }: CHOOSE A GAME</h1>
      <p> Thank you for being part of this experiment. The experiment is a part of a project being done by IIIT-H students to study the effects of word memorability. The experiment will take around 5 minutes to complete. We appreciate your patience and time taken to be part of this experiment.</p>
      <br/>
      <p>If you had to choose one of the games to play, which one will you choose? Select a game by clicking on the radio button below and click on the proceed button</p>

      <div className="m-5">
        <div className="row">
          <div className="col-lg-6">
            <img src="/Bling.jpeg" width="100%"/>
            <input type="radio" id="bling" name="game" value="BLING" required/> BLING
          </div>
          <div className="col-lg-6">
            <img src="/Tingo.jpeg" width="100%"/>
            <input type="radio" id="tingo" name="game" value="TINGO"/> TINGO
          </div>
        </div>
      </div>

      <button className="btn btn-success" onClick={proceed}> PROCEED </button>

    </div>
  );
}

export default Final;
