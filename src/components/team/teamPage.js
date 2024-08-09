import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ronaldinho from "../../assets/ronaldinho.jpg";
import "./teamPage.css";

function TeamPage() {
  const [people, setPeople] = useState([
    {
      firstName: "Mark",
      lastName: "Otto",
      username: "@mdo",
      position: "Offense",
      paid: true,
    },
    {
      firstName: "Jacob",
      lastName: "Thornton",
      username: "@fat",
      position: "Defense",
      paid: false,
    },
    {
      firstName: "Larry",
      lastName: "Bird",
      username: "@twitter",
      position: "Goalie",
      paid: true,
    },
  ]);

  const [newPerson, setNewPerson] = useState({
    firstName: "",
    lastName: "",
    username: "",
    position: "",
    paid: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewPerson({
      ...newPerson,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAddPerson = () => {
    setPeople([...people, newPerson]);
    setNewPerson({
      firstName: "",
      lastName: "",
      username: "",
      position: "",
      paid: false,
    });
  };

  const upcomingEvents = [
    {
      date: "May 6th, 2024",
      event: "Soccer game against Beagle FC",
      time: "5PM",
      location: "1000 Milton St",
    },
    {
      date: "June 3rd, 2024",
      event: "Social gathering at the pub",
      time: "6PM",
      location: "The Old Pub",
    },

    {
      date: "June 23rd, 2024",
      event: "Game against Bill FC",
      time: "6PM",
      location: "The Old Pub",
    },

    {
      date: "July 7th, 2024",
      event: "Game against Lion FC",
      time: "6PM",
      location: "The Old Pub",
    },
  ];

  const posts = [
    {
      user: "Mark",
      content:
        "Can you bring the green soccer ball next game? It has a better feel.",
      comments: [
        { username: "@fato", comment: "Sure, I can bring it!" },
        { username: "@twitter", comment: "Great idea, Mark!" },
      ],
    },
    {
      user: "Jacob",
      content: "Check out this awesome goal I scored!",
      image: ronaldinho,
      comments: [
        { username: "@mdo", comment: "Nice shot!" },
        { username: "@twitter", comment: "Amazing goal!" },
      ],
    },
  ];

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary center-navbar">
        <Container>
          <Navbar.Collapse id="team-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#schedule">Games Schedule</Nav.Link>
              <Nav.Link href="#MyTeam">My Team</Nav.Link>
              <Nav.Link href="#Rules">Team rules</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <h1 className="team-name">Your Team's Name</h1>
        <div className="team-image-container">
          <Image src={ronaldinho} roundedCircle className="team-image" />
        </div>

        <Row>
          <Col md={3} className="scrollable-events">
            <h2>Upcoming Events</h2>
            <ListGroup>
              {upcomingEvents.map((event, index) => (
                <ListGroup.Item key={index}>
                  <div>
                    <strong>Date:</strong> {event.date}
                  </div>
                  <div>
                    <strong>Event:</strong> {event.event}
                  </div>
                  <div>
                    <strong>Time:</strong> {event.time}
                  </div>
                  <div>
                    <strong>Location:</strong> {event.location}
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <br></br>
          <Col md={9}>
            <h1 className="teamPage">Team</h1>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                  <th>Position</th>
                  <th>Paid Status</th>
                </tr>
              </thead>
              <tbody>
                {people.map((person, index) => (
                  <tr
                    key={index}
                    className={person.paid ? "table-success" : "table-danger"}
                  >
                    <td>{index + 1}</td>
                    <td>{person.firstName}</td>
                    <td>{person.lastName}</td>
                    <td>{person.username}</td>
                    <td>{person.position}</td>
                    <td>{person.paid ? "Paid" : "Not Paid"}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Form>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    value={newPerson.firstName}
                    onChange={handleChange}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    value={newPerson.lastName}
                    onChange={handleChange}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={newPerson.username}
                    onChange={handleChange}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Position"
                    name="position"
                    value={newPerson.position}
                    onChange={handleChange}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Paid"
                    name="paid"
                    checked={newPerson.paid}
                    onChange={handleChange}
                  />
                </Col>
                <Col>
                  <Button onClick={handleAddPerson}>Add Person</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col>
            <hr></hr>
            <div className="group-rules">
              <h2>Group Rules</h2>
              <ul>
                <li>No refund on last minute cancelation</li>
                <li>Membership is $200 per league</li>
                <li>No cleats allowed</li>
                <li>Respect teammates and opponents</li>
                <li>
                  <strong>
                    Administrator: {people[0]?.username} {" - "}
                    {people[0]?.firstName} {people[0]?.lastName}
                  </strong>
                </li>
                <li>
                  <strong>
                    2nd Administrator: {people[1]?.username}
                    {" - "} {people[1]?.firstName} {people[1]?.lastName}
                  </strong>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <br></br>
            <hr></hr>
            <h2>Team Posts</h2>
            {posts.map((post, index) => (
              <Card key={index} className="mb-3">
                <Card.Body>
                  <Card.Title>{post.user}</Card.Title>
                  <Card.Text>{post.content}</Card.Text>
                  {post.image && (
                    <Image src={post.image} className="post-image" fluid />
                  )}
                  <div>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="me-2"
                    >
                      Like
                    </Button>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      className="me-2"
                    >
                      Comment
                    </Button>
                    <Button variant="outline-success" size="sm">
                      Share
                    </Button>
                  </div>
                  <div className="mt-3">
                    {post.comments.map((comment, i) => (
                      <div key={i} className="mb-2">
                        <strong>{comment.username}:</strong> {comment.comment}
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TeamPage;
