import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import searchImage from "../image/people_search.svg";

const YourComponent = () => {
  return (
    <Container
      fluid
      className="text-center d-flex align-items-center justify-content-sm-around"
      style={{
        background: "linear-gradient(45deg, #fff1eb  30%,#ace0f9  90%)",
        minHeight: "100vh",
        maxWidth: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <Row>
        {/* Half for SVG Image */}
        <Col md={6} xs={12}>
          <img
            src={searchImage}
            alt="Search"
            className="img-fluid rounded float-right"
            style={{
              maxWidth: "100%",
              height: "23.5rem",
              marginBottom: "1rem",
              display: "block",
            }}
          />
        </Col>

        {/* Half for Buttons and Content */}
        <Col md={6} xs={12}>
          <div
            className="d-flex flex-column align-items-center border rounded p-4"
            style={{
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
              width: "80%",
              height: "23.5rem",
            }}
          >
            <h3 className="font-weight-bold mb-4" style={{ color: "#0E4DCB" }}>
              Welcome to Annular Technologies Career Portal
            </h3>
            <p className="lead">
              Explore exciting career opportunities with us.
            </p>

            <div className="mt-4">
              <p className="font-weight-dark">If you're new, register now!</p>

              <Link to="/loginUser" style={{ textDecoration: "none" }}>
                <Button
                  variant="primary"
                  className="mt-2"
                  style={{
                    height: "2.5rem",
                    width: "100%",
                    maxWidth: "12.5rem",
                    backgroundColor: "#0E4DCB",
                  }}
                >
                  Login
                </Button>
              </Link>

              <div className="mt-2"></div>

              <Link to="/registerUser" style={{ textDecoration: "none" }}>
                <Button
                  variant="primary"
                  className="mt-2"
                  style={{
                    height: "2.5rem",
                    width: "100%",
                    maxWidth: "12.5rem",
                    backgroundColor: "#0E4DCB",
                  }}
                >
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default YourComponent;
