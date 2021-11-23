import React, { Component } from 'react';
import axios from 'axios';
import { Button, Navbar, Container, Row, Card, ListGroup, Form  } from 'react-bootstrap';

class Welcome extends Component {
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
        window.location.href = '/consent';
        })
        .catch(err => {
          console.log("Error in Creating Experiment!", err);
        })
  };



  render() {
    return (
    <div className="container text-center p-5">
        <Container fluid style={{ fontSize: 20}}>
            <Row>
                <Navbar bg="light">
                    <Container align="center">
                    <Navbar.Brand href="#home" style={{display:'flex'}}><i>Does gender and age play a role in determining our memory capacity?</i></Navbar.Brand>
                    </Container>
                </Navbar>
            </Row>
            <Row>
                <Card>
                    <Card.Body>
                        <Card.Title>Intro to Psychology</Card.Title>
                        <Card.Subtitle>HS2.202</Card.Subtitle>
                    </Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>IIIT-H</ListGroup.Item>
                        <ListGroup.Item>Instructor: Priyanka Srivastava &amp; Vishnu Sreekumar </ListGroup.Item>
                        <ListGroup.Item>Prajneya Kumar | Dayitva Goel | Aman Atman</ListGroup.Item>
                    </ListGroup>
                    <Card.Text>
                        WELCOME TO THE EXPERIMENT
                    </Card.Text>
                </Card>
            </Row>
            <Row>
            <Card>
                <Card.Body>Focus detail – Elaborate the objective of the study. Keep 
            in mind that if the elaboration will effect your 
            investigation, then in that case conceal the main 
            purpose of the study. Inform them about the broad 
            focus at the end of the experiment, during debriefing. 
            7. Nature of the study – let say if you have four tasks in 
            your experiment, inform your participants in advance 
            that they will be asked to perform four tasks. Each task 
            will be different in nature and will require different time 
            to complete the task.</Card.Body>
                </Card>
            </Row>
            <Row>
                <br/>
                <form onSubmit={this.onSubmit}>
                    <Button type="submit" className="btn btn-success"> PROCEED </Button>
                </form>
            </Row>
    </Container>
      </div>
    );
  }
}

export default Welcome;
