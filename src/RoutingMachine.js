import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import 'leaflet-control-geocoder';
import { withLeaflet } from "react-leaflet";

// lat: 60.21825196984328,
// lng: 25.05910387617357,
class Routing extends MapLayer {
  createLeafletElement() {
    console.log('Routing: called');
    const { map } = this.props;
    let leafletElement = L.Routing.control(
      {
        waypoints: [
            L.latLng(60.21825196984328, 25.05910387617357),
            L.latLng(60.21825196984328, 25.05910387617357)
        ],
        routeWhileDragging: true,
        geocoder: L.Control.Geocoder.nominatim()
      }
      ).addTo(map.leafletElement);
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);