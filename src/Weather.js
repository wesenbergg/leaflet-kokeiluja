import React, { useEffect, useState } from 'react';


const Weather = () => {
  const [weather, setWeather] = useState()

  useEffect( () => {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=60.169&lon=24.938&appid=44ebf4647bda393b62fec194d66559e5")
    .then(res => res.json())
    .then(res => setWeather(res))
  }, [])

  if(!weather) return <>asd</>
  
  const formatDate = () => {
    const date = Date(weather.dt).split(' ').slice(0, 5).join(" ")
    return date.slice(0, date.length - 3)
  }

  return (
    <div id="weather" className="bg-dark text-light p-4 justify-content-center">
    <div id="wHead" className="container-fluid row mt-4">
      <span className="col-6 col-sm-5 pb-5">
        <h2>Weather</h2>
        <h3>{weather.name}, {weather.sys.country}</h3>
        <small className="text-muted">
          {formatDate()}
        </small>
      </span>
      <div className="col-6 d-none d-md-block p-0 m-0">
        <div className="bg-blue w-100 ml-3">
          <img id="wicon" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather icon" />
        </div>
        <div className="celsius d-inline-block text-right">
          <h1 className="font-300">13&#8451;</h1>
          <p className="lead my-0">{weather.weather[0].main}</p>
        </div>
      </div>
    </div>
    <div id="wData" className="container-fluid">
    <table class="table table-striped table-dark">
      <tbody>
        <tr>
          <th scope="row">Description</th>
          <td>{weather.weather[0].description}</td>
        </tr>
        <tr>
          <th scope="row">Wind</th>
          <td>{weather.wind.speed} m/s</td>
        </tr>
        <tr>
          <th scope="row">Humidity</th>
          <td>{weather.main.humidity}%</td>
        </tr>
        <tr>
          <th scope="row">Visibility</th>
          <td>{weather.visibility/100}%</td>
        </tr>
        <tr>
          <th scope="row">Coord</th>
          <td>[ {weather.coord.lon}, {weather.coord.lat} ]</td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
  );
}

export default Weather;
