import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Panel, PanelBody, PanelHeading, Image } from 'react-bootstrap';
import userImage from "../assets/img/userImage.png";

function UserIconPanel(props) {

  var HeadingStyles = {
    padding: '50px',
    backgroundColor: 'Dodgerblue'
  }
  var BodyStyles = {
    display: 'inline-block'
  }

  return(
    <div>
      <div className="container">

      <div className="row">
        <div className="col-md-4">
        <Panel>
          <Panel.Heading style={HeadingStyles}></Panel.Heading>
          <img src={userImage}></img>
          <Panel.Body >Tweets</Panel.Body>
            <Panel.Body style={BodyStyles}>Following</Panel.Body>
              <Panel.Body style={BodyStyles}>Followers</Panel.Body>

        </Panel>

      </div>
      </div>
    </div>
    </div>
  );
}

export default UserIconPanel;
