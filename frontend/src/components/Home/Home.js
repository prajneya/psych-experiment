import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
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
        if(res.data.experiment_type==0 || res.data.experiment_type==1 ){
          window.location.href = '/game/'+res.data._id;
        }
        else{
          window.location.href = '/video/'+res.data._id;
        }
      })
      .catch(err => {
        console.log("Error in Creating Experiment!", err);
      })
  };



  render() {
    return (
      <div className="container text-center p-5">
        <h1>WELCOME TO THE EXPERIMENT</h1>
        <p> Thank you for being part of this experiment. The experiment is a part of a project being done by IIIT-H students to study the effects of word memorability. The experiment will take around 5 minutes to complete. We appreciate your patience and time taken to be part of this experiment.</p>
        <br/>
        <p>Please follow the instructions on the screen and complete the said tasks. Fill the form below once you are ready. </p>

        <form noValidate onSubmit={this.onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Your Name (Not Necessary)'
              name='name'
              className='form-control'
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div className='form-group'>
            <input
              type='text'
              placeholder='Your Age'
              name='age'
              className='form-control'
              value={this.state.age}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div className='form-group'>
            <input
              type='text'
              placeholder='Your Gender'
              name='gender'
              className='form-control'
              value={this.state.gender}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div className='form-group'>
            <input
              type='text'
              placeholder='Your Occupation'
              name='occupation'
              className='form-control'
              value={this.state.occupation}
              onChange={this.onChange}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-success"> PROCEED </button>
        </form>
      </div>
    );
  }
}

export default Home;