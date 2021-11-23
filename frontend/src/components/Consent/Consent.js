import React, { Component } from 'react';
import axios from 'axios';

class Consent extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      gender: '',
      age: '',
      occupation: '',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      gender: this.state.age,
      age: this.state.gender,
      occupation: this.state.occupation,
    };

    axios
      .post('/api/experiment', data)
      .then(res => {
        this.setState({
          name: '',
          age:'',
          gender:'',
          occupation:'',
        })
        console.log(res);
        window.location.href = '/home';
        })
        .catch(err => {
          console.log("Error in Creating Experiment!", err);
        })
  };



  render() {
    return (
      <div className="container text-center p-5">
        <h2 align="center">CONSENT FORM</h2>
        <br/>
        <p align="justify">Your participation in this experiment is entirely voluntary. You can choose to withdraw from this study at any point in time. However, for the benefit of the study, please consider in advance whether you are really able to make a full and long-term commitment. The current experiment doesn't involve mental or physical harm. <br/><br/>

<u>Anonymity and Confidentiality</u><br/>

Your data will be stored with a unique anonymous Participant ID to protect your identity. All data will be kept purely confidential, and will only be used for research purposes. The data will be accessible only to those working on the project.<br/><br/>

<u>Participant ID</u><br/>

At the start of the experiment, you will be asked to enter an identifier called "Participant ID". This will help us fully preserve the anonymity of your data while helping us track your progress. It is essential that you choose a unique Participant ID, anonymous (not your name), but one that you will remember easily.<br/><br/>

Kindly put your Participant ID in the following format: initials of your name with birth date (or PIN CODE) in the end.<br/><br/>

For eg. Participant ID: AS14 (Name - Akash Singh, birthday-14th Jan).<br/><br/>

After taking into account the requirements of this study, if you are ready to contribute, please give your consent by ticking on the checkbox (provided below). We are really grateful for your contribution to our research.

If you have any further questions, please contact us at any of the provided email addresses: <br/><br/>

<a href="mailto:prajneya.kumar@research.iiit.ac.in">prajneya.kumar@research.iiit.ac.in</a><br/>
<a href="mailto:dayitva.goel@students.iiit.ac.in">dayitva.goel@students.iiit.ac.in</a><br/>
<a href="mailto:aman.atman@research.iiit.ac.in">aman.atman@research.iiit.ac.in</a><br/><br/>

<input type="checkbox" />  I have read the aforementioned information carefully. Any questions pertaining to this experiment have been answered to my best satisfaction. I hereby voluntarily agree to participate in this project.<br/><br/> 

Kindly click on "Proceed" button to move ahead.</p>
        <br/>

        <form onSubmit={this.onSubmit}>
          <button type="submit" className="btn btn-success"> PROCEED </button>
        </form>
      </div>
    );
  }
}

export default Consent;
