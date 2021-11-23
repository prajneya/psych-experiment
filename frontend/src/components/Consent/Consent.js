import React, { Component } from 'react';

class Consent extends Component {
  constructor() {
    super();
  }

  onSubmit = e => {
    e.preventDefault();
    window.location.href = '/home';
  };

  render() {
    return (
      <div className="container text-center p-5">
        <h2 align="center">CONSENT FORM</h2>
        <br/>
        <p align="justify">Your participation in this experiment is entirely voluntary. You can choose to withdraw from this study at any point in time. However, for the benefit of the study, please consider in advance whether you are really able to make a full and long-term commitment. The current experiment doesn't involve mental or physical harm.

Anonymity and Confidentiality

Your data will be stored with a unique anonymous Participant ID to protect your identity. All data will be kept purely confidential, and will only be used for research purposes. The data will be accessible only to those working on the project.

Participant ID

At the start of the experiment, you will be asked to enter an identifier called "Participant ID". This will help us fully preserve the anonymity of your data while helping us track your progress. It is essential that you choose a unique Participant ID, anonymous (not your name), but one that you will remember easily

Kindly put your Participant ID in the following format: initials of your name with birth date (or PIN CODE) in the end.

for eg. Subject ID: AS14 (Name - Akash Singh, birthday-14th Jan).

After taking into account the requirements of this study, if you are ready to contribute, please give your consent by ticking on the checkbox (provided below). We are really grateful for your contribution to our research.

If you have any further questions, please contact us at the provided email address. Principal Investigator: prisanka sivttin

I have read the aforementioned information carefully. Any questions pertaining to this experiment have been answered to my best satisfaction. I hereby voluntarily agree to participate in this project. To proceed, kindly click on "PROCEED"</p>
        <br/>

        <form onSubmit={this.onSubmit}>
          <button type="submit" className="btn btn-success"> PROCEED </button>
        </form>
      </div>
    );
  }
}

export default Consent;
