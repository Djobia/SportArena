import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FieldCard from "../field/FieldCard.js";
import "./rental.css";

const fields = [
  {
    name: "7A",
    price: 130,
    description:
      "A 7-a-side soccer field is a mid-sized pitch tailored for those who enjoy a slightly larger game compared to 5-a-side but don't need a full 11-a-side field. This field size allows for more players, additional ball movement, and tactical play.",
    location: "123 Soccer Ave, Houston, TX",
    type: "Outdoor",
    capacity: "7 vs 7 up to 9 vs 9",
    contactName: "John Doe",
    contactPhone: "832.395.7130",
    contactEmail: "john.doe@example.com",
  },
  {
    name: "5B",
    price: 100,
    description:
      "A 5-a-side soccer field is perfect for small, fast-paced games. It's great for quick ball movement and skillful play.",
    location: "456 Football St, Houston, TX",
    type: "Indoor",
    capacity: "5 vs 5",
    contactName: "Jane Smith",
    contactPhone: "832.395.7131",
    contactEmail: "jane.smith@example.com",
  },
  {
    name: "11C",
    price: 200,
    description:
      "An 11-a-side soccer field is the full-size pitch used for traditional soccer games. It offers plenty of space for extensive ball movement and strategic play.",
    location: "789 Stadium Blvd, Houston, TX",
    type: "Outdoor",
    capacity: "11 vs 11",
    contactName: "Bill Johnson",
    contactPhone: "832.395.7132",
    contactEmail: "bill.johnson@example.com",
  },
  {
    name: "7D",
    price: 135,
    description:
      "Another 7-a-side soccer field, similar to 7A but located in a different area. Ideal for mid-sized games with room for more tactical play.",
    location: "321 Arena Rd, Houston, TX",
    type: "Indoor",
    capacity: "7 vs 7 up to 9 vs 9",
    contactName: "Chris Evans",
    contactPhone: "832.395.7133",
    contactEmail: "chris.evans@example.com",
  },
  {
    name: "5E",
    price: 105,
    description:
      "A 5-a-side soccer field designed for intense, small-team games. Perfect for honing quick reflexes and teamwork.",
    location: "654 Park Ln, Houston, TX",
    type: "Outdoor",
    capacity: "5 vs 5",
    contactName: "Emily Davis",
    contactPhone: "832.395.7134",
    contactEmail: "emily.davis@example.com",
  },
];

const Rental = () => {
  return (
    <Container>
      <h1 className="rental-header">Soccer Fields for Rent</h1>
      <Row>
        {fields.map((field, index) => (
          <Col md={12} key={index}>
            <FieldCard field={field} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Rental;
