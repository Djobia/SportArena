import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import "./playerPage.css";
import Image from "react-bootstrap/Image";
import ronaldinho from "../../assets/ronaldinho.jpg";
//jgfdf
function PlayerPage() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="form-container">
      <h1>Test</h1>
      <h2 className="form-title">⚽️ Player Profile Form 🥅</h2>
      <div className="profile-image-container">
        <Image src={ronaldinho} roundedCircle className="profile-image" />
      </div>
      <Row className="text-center mb-3">
        <Button type="submit" className="btn-uploadPic">
          Upload profile picture
        </Button>
      </Row>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label className="form-label">First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="Lamine"
              className="form-control"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label className="form-label">Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue="Gueye"
              className="form-control"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label className="form-label">Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
                className="form-control"
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationEmail">
            <Form.Label className="form-label">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              required
              className="form-control"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationPassword">
            <Form.Label className="form-label">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              className="form-control"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <br></br>
        <Form.Group as={Col} md="6" controlId="validationPhone">
          <Form.Label className="form-label">Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Phone Number"
            required
            className="form-control"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid phone number.
          </Form.Control.Feedback>
        </Form.Group>

        <br></br>

        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationDescription">
            <Form.Label className="form-label">Quick Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Quick Description"
              required
              className="form-control"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a description.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCity">
            <Form.Label className="form-label">City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              required
              className="form-control"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationState">
            <Form.Label className="form-label">State</Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              required
              className="form-control"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationZip">
            <Form.Label className="form-label">Zip</Form.Label>
            <Form.Control
              type="text"
              placeholder="Zip"
              required
              className="form-control"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationSport">
            <Form.Label className="form-label">Sport</Form.Label>
            <Form.Control
              type="text"
              placeholder="Sport"
              required
              className="form-control"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid sport.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationPositions">
            <Form.Label className="form-label">Playing Positions</Form.Label>
            <Form.Control
              type="text"
              placeholder="Striker, Midfielder, Defender"
              required
              className="form-control"
            />
            <Form.Control.Feedback type="invalid">
              Please provide valid positions.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationLevel">
            <Form.Label className="form-label">Level</Form.Label>
            <Form.Control
              type="text"
              placeholder="Intermediate, Average"
              required
              className="form-control"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid level.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <br></br>

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit" className="btn-submit">
          Submit form
        </Button>
      </Form>
    </div>
  );
}

export default PlayerPage;
