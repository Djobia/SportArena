import React, { useState } from "react";
import { Card, Button, Form, Modal } from "react-bootstrap";
import ronaldinho from "../../assets/ronaldinho.jpg";
import { FaStar, FaCalendarAlt } from "react-icons/fa";
import "./FieldCard.css";

const FieldCard = ({ field }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [rentDuration, setRentDuration] = useState("1 hour");
  const [price, setPrice] = useState(field.price);

  const handleCalendarShow = () => setShowCalendar(true);
  const handleCalendarClose = () => setShowCalendar(false);

  const handleDurationChange = (e) => {
    const duration = e.target.value;
    setRentDuration(duration);
    let hours = duration.includes("hour")
      ? parseInt(duration)
      : duration === "Half day"
        ? 4
        : 8;
    let calculatedPrice = hours * field.price;

    // Apply discount for more than 2 hours
    if (hours > 2) {
      calculatedPrice *= 0.9;
    }

    setPrice(calculatedPrice);
  };

  return (
    <>
      <Card className="field-card">
        <Card.Body>
          <div className="field-card-content">
            <div className="field-image-container">
              <Card.Img
                variant="top"
                src={ronaldinho}
                className="field-image"
              />
            </div>
            <div className="field-info-container">
              <Card.Title className="field-name">{field.name}</Card.Title>
              <Card.Text className="field-price">${price.toFixed(2)}</Card.Text>
              <Card.Text className="field-description">
                {field.description}
              </Card.Text>
              <Card.Text className="field-location">
                <strong>Location:</strong>
                <a
                  href={`https://maps.google.com/?q=${field.location}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {field.location}
                </a>
              </Card.Text>
              <Card.Text className="field-type">
                <strong>Type:</strong> {field.type}
              </Card.Text>
              <Card.Text className="field-capacity">
                <strong>Capacity:</strong> {field.capacity}
              </Card.Text>
              <Form.Group controlId="rentingOptions">
                <Form.Label>Renting Options</Form.Label>
                <Form.Control
                  as="select"
                  value={rentDuration}
                  onChange={handleDurationChange}
                >
                  <option>1 hour</option>
                  <option>2 hours</option>
                  <option>3 hours</option>
                  <option>Half day</option>
                  <option>Full day</option>
                </Form.Control>
              </Form.Group>
              <Card.Text className="field-rating">
                <FaStar className="star-icon" /> 4.5 (20 ratings)
              </Card.Text>
              <Card.Text className="field-contact">
                <strong>Contact:</strong> {field.contactName} <br />
                <strong>Phone:</strong> {field.contactPhone} <br />
                <strong>Email:</strong> {field.contactEmail}
              </Card.Text>
              <Card.Text className="field-clause">
                <strong>No Show Clause:</strong> You may cancel or reschedule
                your rental up to two hours before your rental time. Otherwise,
                you will be charged a cancellation fee of $35.
              </Card.Text>
            </div>
          </div>
          <div className="field-buttons">
            <Button
              variant="secondary"
              className="calendar-button"
              onClick={handleCalendarShow}
            >
              <FaCalendarAlt /> Availability
            </Button>
            <Button variant="primary" className="rent-button">
              Rent Field
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Modal show={showCalendar} onHide={handleCalendarClose}>
        <Modal.Header closeButton>
          <Modal.Title>Available Dates and Times</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Calendar component can be integrated here */}
          <p>Calendar with available dates and times will be shown here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCalendarClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FieldCard;
