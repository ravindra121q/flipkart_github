import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Navbar1() {
  return (
    <>
      <Navbar
        bg="primary"
        data-bs-theme="dark"
        expand="lg"
        style={{ padding: "0px 10px 0px 10px" }}
      >
        <Container
          style={{
            width: "95%",
            margin: "auto",
            // border: "2px solid red",
            alignItems: "center",
            textAlign: "center",
            color: "white",
          }}
        >
          <Navbar.Brand>
            <Link to="/">
              <img
                src="logo.jpeg"
                alt="logo"
                height={"40px"}
                style={{ blendMode: "multiply", marginLeft: "60px" }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <input
                  type="text"
                  placeholder="Search"
                  style={{
                    width: "600px",
                    maxWidth: "550px",
                    height: "43px",
                    borderRadius: "3px",
                    outline: "none",
                    backgroundColor: "white",
                    marginRight: "10px",
                    paddingLeft: "10px",
                    textAlign: "center",
                  }}
                />
              </Nav.Link>
              <Nav.Link href="#features">
                <button
                  style={{
                    color: "blue",
                    backgroundColor: "white",
                    width: "120px",
                    height: "35px",
                  }}
                >
                  Login
                </button>
              </Nav.Link>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  alignContent: "center",
                  textAlign: "center",
                  paddingBottom: "10px",
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "bold",
                  marginLeft: "25px",
                  gap: "40px",
                }}
              >
                <Nav.Link style={{ color: "white" }}>Become a Seller</Nav.Link>
                <Nav.Link style={{ color: "white" }}>
                  <DropdownButton id="dropdown-basic-button" title="More">
                    <Dropdown.Item href="#/action-1">
                      Notification Preference
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      24*7 Customer Support
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Advertise</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Download App
                    </Dropdown.Item>
                  </DropdownButton>
                </Nav.Link>
                <Nav.Link style={{ color: "white" }}>
                  <FontAwesomeIcon icon="fa-solid fa-cart-arrow-down" beat />
                  Cart
                </Nav.Link>
              </div>
            </Nav>
            {/* <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1;
