import React from "react";
import Table from "react-bootstrap/Table";
import "./league.css";
import ronaldinho from "../../assets/ronaldinho.jpg"; // Replace this with the correct path for your images

const League = () => {
  const rankings = [
    {
      position: 1,
      club: "Manchester City",
      played: 36,
      won: 28,
      drawn: 4,
      lost: 4,
      gf: 93,
      ga: 31,
      gd: "+62",
      points: 88,
    },
    {
      position: 2,
      club: "Arsenal",
      played: 37,
      won: 25,
      drawn: 6,
      lost: 6,
      gf: 83,
      ga: 43,
      gd: "+40",
      points: 81,
    },
    {
      position: 3,
      club: "Newcastle United",
      played: 37,
      won: 19,
      drawn: 13,
      lost: 5,
      gf: 67,
      ga: 32,
      gd: "+35",
      points: 70,
    },
    {
      position: 4,
      club: "Manchester United",
      played: 36,
      won: 21,
      drawn: 6,
      lost: 9,
      gf: 52,
      ga: 41,
      gd: "+11",
      points: 69,
    },
    {
      position: 5,
      club: "Liverpool",
      played: 37,
      won: 19,
      drawn: 9,
      lost: 9,
      gf: 71,
      ga: 43,
      gd: "+28",
      points: 66,
    },
    {
      position: 6,
      club: "Brighton and Hove Albion",
      played: 36,
      won: 18,
      drawn: 7,
      lost: 11,
      gf: 70,
      ga: 50,
      gd: "+20",
      points: 61,
    },
    {
      position: 7,
      club: "Tottenham Hotspur",
      played: 36,
      won: 17,
      drawn: 6,
      lost: 13,
      gf: 66,
      ga: 53,
      gd: "+13",
      points: 57,
    },
    {
      position: 8,
      club: "Chelsea",
      played: 36,
      won: 15,
      drawn: 9,
      lost: 12,
      gf: 58,
      ga: 50,
      gd: "+8",
      points: 54,
    },
    {
      position: 9,
      club: "Everton",
      played: 36,
      won: 14,
      drawn: 10,
      lost: 12,
      gf: 50,
      ga: 45,
      gd: "+5",
      points: 52,
    },
    {
      position: 10,
      club: "West Ham United",
      played: 36,
      won: 13,
      drawn: 8,
      lost: 15,
      gf: 48,
      ga: 52,
      gd: "-4",
      points: 47,
    },
  ];

  const schedule = [
    {
      team: "Manchester City",
      date: "2024-08-01",
      time: "15:00",
      locationName: "Etihad Stadium",
      locationAddress: "123 Soccer ave Manchester, UK",
      opponent: "Liverpool",
    },
    {
      team: "Arsenal",
      date: "2024-08-02",
      time: "17:00",
      locationName: "Emirates Stadium",
      locationAddress: "456 Football st London, UK",
      opponent: "Chelsea",
    },
    {
      team: "Newcastle United",
      date: "2024-08-03",
      time: "16:00",
      locationName: "St James Park",
      locationAddress: "789 Magpie rd Newcastle, UK",
      opponent: "Tottenham Hotspur",
    },
    {
      team: "Manchester United",
      date: "2024-08-04",
      time: "14:00",
      locationName: "Old Trafford",
      locationAddress: "123 Soccer ave Manchester, UK",
      opponent: "Everton",
    },
    {
      team: "Liverpool",
      date: "2024-08-05",
      time: "18:00",
      locationName: "Anfield",
      locationAddress: "654 Goal ln Liverpool, UK",
      opponent: "Manchester City",
    },
    {
      team: "Brighton and Hove Albion",
      date: "2024-08-06",
      time: "19:00",
      locationName: "Falmer Stadium",
      locationAddress: "321 Seagull blvd Brighton, UK",
      opponent: "West Ham United",
    },
    {
      team: "Tottenham Hotspur",
      date: "2024-08-07",
      time: "20:00",
      locationName: "Tottenham Stadium",
      locationAddress: "987 Spur rd London, UK",
      opponent: "Newcastle United",
    },
    {
      team: "Chelsea",
      date: "2024-08-08",
      time: "21:00",
      locationName: "Stamford Bridge",
      locationAddress: "654 Blue st London, UK",
      opponent: "Arsenal",
    },
    {
      team: "Everton",
      date: "2024-08-09",
      time: "15:00",
      locationName: "Goodison Park",
      locationAddress: "123 Toffee ln Liverpool, UK",
      opponent: "Manchester United",
    },
    {
      team: "West Ham United",
      date: "2024-08-10",
      time: "17:00",
      locationName: "London Stadium",
      locationAddress: "789 Hammer st London, UK",
      opponent: "Brighton and Hove Albion",
    },
  ];

  schedule.forEach((game) => {
    game.location = `${game.locationName}\n${game.locationAddress}`;
  });

  return (
    <div className="league-container">
      <h2>Soccer Game Rankings</h2>
      <div className="table-container">
        <Table striped bordered hover className="rankings-table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Club</th>
              <th>Played</th>
              <th>Won</th>
              <th>Drawn</th>
              <th>Lost</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((team, index) => (
              <tr key={index}>
                <td>{team.position}</td>
                <td>
                  <img
                    src={ronaldinho}
                    alt={`${team.club} logo`}
                    className="team-logo"
                  />{" "}
                  {team.club}
                </td>
                <td>{team.played}</td>
                <td>{team.won}</td>
                <td>{team.drawn}</td>
                <td>{team.lost}</td>
                <td>{team.gf}</td>
                <td>{team.ga}</td>
                <td>{team.gd}</td>
                <td>{team.points}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <br></br>
      <hr></hr>
      <h2>Soccer Game Schedule</h2>
      <div className="table-container">
        <Table striped bordered hover className="schedule-table">
          <thead>
            <tr>
              <th>Team</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
              <th>Opponent</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((game, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={ronaldinho}
                    alt={`${game.team} logo`}
                    className="team-logo"
                  />{" "}
                  {game.team}
                </td>
                <td>{game.date}</td>
                <td>{game.time}</td>
                <td>
                  {game.location.split("\n").map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </td>
                <td>{game.opponent}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default League;
