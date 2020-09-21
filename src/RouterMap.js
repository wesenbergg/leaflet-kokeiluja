import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import Routing from "./RoutingMachine";

export default class RouterMap extends Component {
  // const { showMarkers } = this.props;
  state = {
    lat: 60.21825196984328,
    lng: 25.05910387617357,
    zoom: 15,
  };
  saveMap = map => {
    this.map = map;
  };


  render() {
    const position = [this.state.lat, this.state.lng];
    return (<>
      <Map center={position} zoom={this.state.zoom} ref={this.saveMap}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {this.props.showMarkers()}
        {this.map && <Routing map={this.map} />}
      </Map>
      </>
    );
  }
}