import React, { Component } from "react";
import axios from "axios";
import { Button, Container, Row, Card, ListGroup } from "react-bootstrap";

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      gender: "",
      age: "",
      occupation: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      gender: this.state.age,
      age: this.state.gender,
      occupation: this.state.occupation,
    };

    axios
      .post("/api/experiment", data)
      .then((res) => {
        this.setState({
          name: "",
          age: "",
          gender: "",
          occupation: "",
        });
        console.log(res);
        window.location.href = "/consent";
      })
      .catch((err) => {
        console.log("Error in Creating Experiment!", err);
      });
  };

  render() {
    return (
      <div className="container text-center p-5">
        <Container fluid style={{ fontSize: 20 }}>
          {/* <Row>
            <Navbar bg="light">
              <Container align="center">
                <Navbar.Brand href="#home" style={{ display: "flex" }}>
                  <i>
                    Does gender and age play a role in determining our memory
                    capacity?
                  </i>
                </Navbar.Brand>
              </Container>
            </Navbar>
          </Row> */}
          <Row>
            <Card>
              <Card.Body>
                <Card.Title>Intro to Psychology</Card.Title>
                <Card.Subtitle>HS2.202</Card.Subtitle>
              </Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>IIIT Hyderabad</ListGroup.Item>
                <ListGroup.Item>
                  Instructor: Priyanka Srivastava &amp; Vishnu Sreekumar{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  Prajneya Kumar | Dayitva Goel | Aman Atman
                </ListGroup.Item>
              </ListGroup>
              <Card.Text>
                <u>WELCOME TO THE EXPERIMENT</u>
              </Card.Text>
            </Card>
          </Row>
          <Row>
            <Card>
              <Card.Body>
                <u>Objective</u>: We are looking to understand the role of
                gender and age in memory retention and capacity.
                <br />
                <br />
                <u>Tasks</u>: You will be asked to perform 3-4 tasks. The
                instructions for the individual task would be provided on the
                task page as you progress. The entire experiment will take
                around 5 minutes to complete.
                <br />
                <br />
                <u>General Instructions</u>:<br />
                1. Avoid noise and find quiet place
                <br />
                2. Do not use mobile phone during experiment and keep mobile
                phone on silent for experiment
                <br />
                3. Perform the task when internet is stable
                <br />
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <br />
            <form onSubmit={this.onSubmit}>
              <Button type="submit" className="btn btn-success">
                {" "}
                PROCEED{" "}
              </Button>
            </form>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Welcome;
