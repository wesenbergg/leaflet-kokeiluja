import React, { useEffect, useState } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import Weather from './Weather';

const position = [60.16985569999999, 24.938379]

const App = () => {
  const [data, setData] = useState([])

  useEffect( () => {
    fetch("https://api.citybik.es/v2/networks/citybikes-helsinki")
    .then(res => res.json())
    .then(res => setData(res.network.stations) )
  }, [])

  const showMarkers = () => data.map( e => 
    <Marker position={[e.latitude, e.longitude]}>
      <Popup>
        <h3>{e.name}</h3>
        <p className="my-0">Pyöriä jäljellä: {e.free_bikes}</p>
        <p className="my-0">Paikkoja vapaana: {e.empty_slots}</p>
      </Popup>
    </Marker>
    )

  return (
    <div className="container-fluid row p-0 m-0">
      <div className="col-8 p-0" >
        <Map center={position} zoom={15}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          {showMarkers()}
        </Map>
      </div>
      <div className="col-4 p-0">
        <Weather />
      </div>
    </div>
  );
}

export default App;
