import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Card,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import Autocomplete from "react-google-autocomplete";
import "./home.css";

// Import images for each sport
import soccerImage from "../../assets/soccer.jpg";
import basketballImage from "../../assets/basketball.jpg";
import footballImage from "../../assets/football.jpg";
import baseballImage from "../../assets/baseball.jpg";
import volleyballImage from "../../assets/volleyball.jpg";
import golfImage from "../../assets/golf.jpg";
import tennisImage from "../../assets/tennis.jpg";
import softballImage from "../../assets/softball.jpg";
import hockeyImage from "../../assets/hockey.jpg";

const sports = [
  {
    name: "Soccer/Football",
    text: "Find a soccer game near you and join a group",
    image: soccerImage,
  },
  {
    name: "Basketball",
    text: "Find a basketball game near you and join a group",
    image: basketballImage,
  },
  {
    name: "American Football",
    text: "Find a football game near you and join a group",
    image: footballImage,
  },
  {
    name: "Baseball",
    text: "Find a baseball game near you and join a group",
    image: baseballImage,
  },
  {
    name: "Volleyball",
    text: "Find a volleyball game near you and join a group",
    image: volleyballImage,
  },
  {
    name: "Golf",
    text: "Find a golf game near you and join a group",
    image: golfImage,
  },
  {
    name: "Tennis",
    text: "Find a tennis game near you and join a group",
    image: tennisImage,
  },
  {
    name: "Softball",
    text: "Find a softball game near you and join a group",
    image: softballImage,
  },
  {
    name: "Hockey",
    text: "Find a hockey game near you and join a group",
    image: hockeyImage,
  },
];

const Home = () => {
  const [city, setCity] = useState("Houston, TX");
  const navigate = useNavigate(); // Create a navigate instance

  // Function to handle card clicks
  const handleCardClick = () => {
    navigate("/games"); // Navigate to the games page
  };

  return (
    <div className="home-container">
      <Navbar bg="dark" variant="dark" className="navbar-section">
        <Container>
          <Navbar.Brand href="#home">Sport Arena</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* City Search and Options Dropdown */}
      <div className="header-controls">
        <div className="city-search-container">
          <Autocomplete
            apiKey="YOUR_GOOGLE_API_KEY"
            onPlaceSelected={(place) => setCity(place.formatted_address)}
            types={["(cities)"]}
            className="city-search"
            placeholder="Search City"
          />
        </div>
        <div>
          <h1>Sport Arena</h1>
          <h5>Win by Playing</h5>
        </div>
        <div className="options-dropdown-container">
          <DropdownButton id="dropdown-basic-button" title="Options">
            <Dropdown.Item href="#profile">My Profile</Dropdown.Item>
            <Dropdown.Item href="#groups">My Groups</Dropdown.Item>
            <Dropdown.Item href="#leagues">My Leagues</Dropdown.Item>
            <Dropdown.Item href="#login">Login/Logout</Dropdown.Item>
            <Dropdown.Item href="#settings">Settings</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>

      <Container className="group-section">
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <Button variant="primary" className="group-button">
              Create a Group
            </Button>
            <h5 className="group-label">
              Create, Organize a sport group for you and your friends.
            </h5>
          </Col>
        </Row>
      </Container>

      <Container className="pickup-section">
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <Button variant="success" className="pickup-button">
              Join a Pickup Game
            </Button>
            <h5 className="group-label">
              Select a sport below, join a game and start playing.
            </h5>
          </Col>
        </Row>
        <Row className="justify-content-center sports-cards-container">
          {sports.map((sport, index) => (
            <Col md={4} key={index} className="d-flex align-items-stretch">
              <Card className="sport-card" onClick={handleCardClick}>
                <LazyLoadImage
                  variant="top"
                  src={sport.image}
                  alt={`${sport.name} image`}
                  //effect="blur"
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title>{sport.name}</Card.Title>
                  <Card.Text>{sport.text}</Card.Text>
                  <Button variant="primary">Find a Game</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
