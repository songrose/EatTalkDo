//
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Button from "@material-ui/core/Button";
import { Link, Redirect } from "react-router-dom";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "pink",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {text}
  </div>
);
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  testOpponent = async () => {
    let payload = {
      activity: "Eating",
      distance: 123,
      category: "Asian",
    };

    let opponentQuery = await fetch("/search/findAll", {
      headers: {
        Accept: "application/json, text/plain, /",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(payload),
    });
  };

  render() {
    const buttonpink = {
      background: "pink",
      borderRadius: 3,
      border: 0,
      color: "black",
      height: 35,
      padding: "0 15px",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    };
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100%", width: "100%" }}>
        asdasdsa
        <Button id="fin-button" style={buttonpink} onClick={this.testOpponent}>
          Send data to the backend
        </Button>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBDGWRDx2AOhEBX5w93l_3iDdHIXa8cTQk" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
