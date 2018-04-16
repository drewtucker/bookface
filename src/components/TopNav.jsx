import React, { Component } from "react";
import PropTypes from "prop-types";
import {Nav, NavItem, Navbar, FormGroup, FormControl} from "react-bootstrap";
import { Button } from 'react-bootstrap';


function TopNav(props){
  var TopNavStyles = {
    fontSize: '20px',
  }
  var SearchStyles = {
    borderStyle: 'solid',
    borderColor: 'lightblue',
    borderRadius: '20px',
    borderWidth: '2.5px',
    marginRight: '15px'
  }
  var LinkStyles = {
    borderStyle: 'solid',
    borderColor: 'lightgray',
    borderWidth: '1px',

  }
  return(
    <div style={TopNavStyles}>

    <Navbar >
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">BookFace</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={"Home"} href="#" style={LinkStyles}>
          Home
        </NavItem>
        <NavItem eventKey={"Notifications"} href="#" style={LinkStyles}>
          Notifications
        </NavItem>
        <NavItem eventKey={"Messages"} href="#" style={LinkStyles}>
          Messages
        </NavItem>
      </Nav>
      <Navbar.Form pullRight >
          <FormGroup>
            <FormControl style={SearchStyles}  type="text" placeholder="Search" />
          </FormGroup>
          <FormGroup>
            <FormControl style={SearchStyles} type="text" placeholder="Tweet" />
          </FormGroup>
      </Navbar.Form>
    </Navbar>
  </div>
    );
}

export default TopNav;
