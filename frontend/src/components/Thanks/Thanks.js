import React, { Component, useState } from 'react';
import { useParams } from "react-router-dom";

function Thanks(){

  return (
    <div className="container text-center p-5">
      <h1>THANK YOU!</h1>
      <p> Thank you for being part of this experiment. The experiment is a part of a project being done by IIIT-H students to study the effects of word memorability. The experiment will take around 5 minutes to complete. We appreciate your patience and time taken to be part of this experiment.</p>
      <br/>
      <p>YOU HAVE COMPLETED THIS EXPERIMENT! Please share the link with as many people as you can.</p>

    </div>
  );
}

export default Thanks;
