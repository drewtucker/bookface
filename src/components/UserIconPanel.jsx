import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Panel, PanelBody, PanelHeading, Image } from 'react-bootstrap';
import userImage from "../assets/img/userImage.png";

function UserIconPanel(props) {

  var HeadingStyles = {
    padding: '50px',
    backgroundColor: 'Dodgerblue',
    marginBottom: '0px',
    padding: '50px 0 0 0'
  }
  var BodyStyles = {
    display: 'inline-block'
  }
  var ImageStyles = {
    width: '40px',
    height: '40px',
    position: 'inline-block',
    backgroundColor: 'white'
  }

  return(
    <div>
      <div className="container">

      <div className="row">
        <div className="col-md-5">
        <Panel>
          <Panel.Heading style={HeadingStyles}><img style={ImageStyles} src={userImage}></img></Panel.Heading>

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
