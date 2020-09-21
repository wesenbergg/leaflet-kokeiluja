import React, { useEffect, useState } from 'react';
import { Marker, Popup } from 'react-leaflet'
import RouterMap from './RouterMap';
import Weather from './Weather';

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
        <RouterMap showMarkers={showMarkers}/>
        <Weather />
    </div>
  );
}

export default App;
