import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import "./gameTeams.css";
import teamLogo from "../../assets/ronaldinho.jpg"; // example team logo image
import ronaldinho from "../../assets/ronaldinho.jpg";

// Example data for teams
const teamA = {
  name: "Team A",
  members: [
    {
      number: 1,
      name: "Lamine Gueye",
      username: "@lamineG",
      position: "Striker",
      image: ronaldinho,
    },
    {
      number: 2,
      name: "Yacine Ben",
      username: "@yacineB",
      position: "Defender",
      image: ronaldinho,
    },
    {
      number: 3,
      name: "Gigi Buffon",
      username: "@gigiB",
      position: "Goalkeeper",
      image: ronaldinho,
    },
    {
      number: 4,
      name: "Renaldo Riviero",
      username: "@renaldoR",
      position: "Midfielder",
      image: ronaldinho,
    },
    {
      number: 5,
      name: "Keneth Coridge",
      username: "@kenethC",
      position: "Defender",
      image: ronaldinho,
    },
    {
      number: 6,
      name: "Michael Mifflin",
      username: "@michaelM",
      position: "Striker",
      image: ronaldinho,
    },
    {
      number: 7,
      name: "Modou Diouf",
      username: "@modouD",
      position: "Midfielder",
      image: ronaldinho,
    },
    {
      number: 8,
      name: "Kayleen Wade",
      username: "@kayleenW",
      position: "Goalkeeper",
      image: ronaldinho,
    },
  ],
  roles: {
    organizer: "Lamine Gueye",
    ballRep: "Renaldo Riviero",
    scoreCounter: "Gigi Buffon",
  },
};

const teamB = {
  name: "Team B",
  members: [
    {
      number: 1,
      name: "Joe Pesci",
      username: "@joeP",
      position: "Striker",
      image: ronaldinho,
    },
    {
      number: 2,
      name: "Bill Gates",
      username: "@billG",
      position: "Defender",
      image: ronaldinho,
    },
    {
      number: 3,
      name: "Hawa Ryudoing",
      username: "@hawaR",
      position: "Goalkeeper",
      image: ronaldinho,
    },
    {
      number: 4,
      name: "Hookay Lisgu",
      username: "@hookayL",
      position: "Midfielder",
      image: ronaldinho,
    },
    {
      number: 5,
      name: "Saydat Agayn",
      username: "@saydatA",
      position: "Defender",
      image: ronaldinho,
    },
    {
      number: 6,
      name: "Rita Franklin",
      username: "@ritaF",
      position: "Striker",
      image: ronaldinho,
    },
    {
      number: 7,
      name: "Amy Kisinger",
      username: "@amyK",
      position: "Midfielder",
      image: ronaldinho,
    },
    {
      number: 8,
      name: "Leek Beet",
      username: "@leekB",
      position: "Goalkeeper",
      image: ronaldinho,
    },
  ],
  roles: {
    organizer: "Joe Pesci",
    ballRep: "Bill Gates",
    scoreCounter: "Leekma Boots",
  },
};

function GameTeams() {
  return (
    <Container className="teams-page">
      <div className="game-info">
        <h1 className="gameTeamsTitle">Soccer Game - 5 vs 5</h1>
        <h4>Date: January 5th, 2025</h4>
        <h4>Location: 123 Soccer Ave, Toronto ON L3P 34R</h4>
        <h4>Time: 05:00 PM - 05:55 PM</h4>
      </div>
      <hr />
      <Row className="justify-content-center text-center">
        <Col md={5} className="team-a">
          <h2>
            <Image src={teamLogo} roundedCircle className="team-logo" />
            {teamA.name}
          </h2>
          <Table bordered>
            <thead>
              <tr>
                <th>Player #</th>
                <th>Profile</th>
                <th>Name</th>
                <th>Username</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {teamA.members.map((member, index) => (
                <tr key={index}>
                  <td>{member.number}</td>
                  <td>
                    <Image
                      src={member.image}
                      roundedCircle
                      className="member-image"
                    />
                  </td>
                  <td>{member.name}</td>
                  <td>{member.username}</td>
                  <td>{member.position}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="roles">
            <p>
              <strong>Organizer:</strong> {teamA.roles.organizer}
            </p>
            <p>
              <strong>Ball Rep:</strong> {teamA.roles.ballRep}
            </p>
            <p>
              <strong>Score Counter:</strong> {teamA.roles.scoreCounter}
            </p>
          </div>
        </Col>
        <Col md={2} className="vs-column">
          <h1>VS</h1>
        </Col>
        <Col md={5} className="team-b">
          <h2>
            <Image src={teamLogo} roundedCircle className="team-logo" />
            {teamB.name}
          </h2>
          <Table bordered>
            <thead>
              <tr>
                <th>Player #</th>
                <th>Profile</th>
                <th>Name</th>
                <th>Username</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {teamB.members.map((member, index) => (
                <tr key={index}>
                  <td>{member.number}</td>
                  <td>
                    <Image
                      src={member.image}
                      roundedCircle
                      className="member-image"
                    />
                  </td>
                  <td>{member.name}</td>
                  <td>{member.username}</td>
                  <td>{member.position}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="roles">
            <p>
              <strong>Organizer:</strong> {teamB.roles.organizer}
            </p>
            <p>
              <strong>Ball Rep:</strong> {teamB.roles.ballRep}
            </p>
            <p>
              <strong>Score Counter:</strong> {teamB.roles.scoreCounter}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default GameTeams;
