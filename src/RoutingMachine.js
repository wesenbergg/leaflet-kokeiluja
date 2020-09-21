import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import 'leaflet-control-geocoder';
import { withLeaflet } from "react-leaflet";

class Routing extends MapLayer {
  createLeafletElement() {
    const { map } = this.props;
    let leafletElement = L.Routing.control(
      {
        routeWhileDragging: false,
        geocoder: L.Control.Geocoder.nominatim()
      }
      ).addTo(map.leafletElement);
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);