import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaFutbol, FaShareAlt } from "react-icons/fa";
import ronaldinho from "../../assets/ronaldinho.jpg";
import "./gameCard.css";

const GameCard = ({ game }) => {
  return (
    <Card className="game-card">
      <Card.Body>
        <Row>
          <Col md={4}>
            <img src={ronaldinho} alt="Game" className="game-image" />
          </Col>
          <Col md={8}>
            <Row>
              <Col md={6}>
                <Card.Title className="league-name">{game.league}</Card.Title>
                <Card.Text className="league-info">
                  <strong>League Dates:</strong> {game.leagueDates}
                </Card.Text>
                <Card.Text className="league-info">
                  <strong>League Format:</strong> {game.leagueFormat}
                </Card.Text>
                <Card.Text className="game-details">
                  <strong>Game:</strong> {game.teams}
                </Card.Text>
                <Card.Text>
                  <strong>Date:</strong> {game.date}
                </Card.Text>
                <Card.Text>
                  <strong>Time:</strong> {game.time}
                </Card.Text>
                <Card.Text>
                  <strong>Age:</strong> {game.age}
                </Card.Text>
                <Card.Text>
                  <strong>Information:</strong> {game.contactName} <br />
                  <strong>Phone:</strong> {game.contactPhone} <br />
                  <strong>Email:</strong> {game.contactEmail}
                </Card.Text>
              </Col>
              <Col md={6} className="text-right">
                <Card.Text className="location">
                  <FaMapMarkerAlt />{" "}
                  <a
                    href={game.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {game.location}
                  </a>
                </Card.Text>
                <Card.Text>{game.address}</Card.Text>
                <Card.Text className="game-type">{game.type}</Card.Text>
                <Card.Text className="cost">Fee: ${game.cost}</Card.Text>
                <Button variant="success" className="join-button">
                  Join <FaFutbol />
                </Button>
                <Button variant="info" className="share-button">
                  Share <FaShareAlt />
                </Button>
                <Card.Text className="game-specs">{game.specs}</Card.Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
