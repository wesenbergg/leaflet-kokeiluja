import React, { useEffect, useState } from 'react';


const Weather = () => {
  const [weather, setWeather] = useState()
  const [expanded, setExpanded] = useState(false)
  const [message, setMessage] = useState(true)

  useEffect( () => {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=60.169&lon=24.938&appid=44ebf4647bda393b62fec194d66559e5")
    .then(res => res.json())
    .then(res => setWeather(res))
    setTimeout(() => setMessage(false), 2500)
  }, [])

  if(!weather) return <>asd</>
  
  const formatDate = () => {
    const date = Date(weather.dt).split(' ').slice(0, 5).join(" ")
    return date.slice(0, date.length - 3)
  }

  return (
    <div id="weather" className={`pt-2 bg-dark text-light p-1 justify-content-center transparent ${expanded ? '': 'hide'}`} onClick={() => setExpanded(!expanded)} >
    {message ? <small className="text-light exp-txt">Click to expand</small>: ''}
    <div id="wHead" className="container-fluid row">
      <span className="col-6 col-sm-5 pb-5">
        <h3>Weather</h3>
        <h4>{weather.name}, {weather.sys.country}</h4>
        <small className="text-light">
          {formatDate()}
        </small>
      </span>
      <div className="col-6 d-none d-md-block p-0 m-0">
        <div className="bg-blue w-100 ml-3">
          <img id="wicon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather icon" />
        </div>
        <div className="celsius d-inline-block text-right">
        <h3 className="font-300">{Math.round(weather.main.temp - 273.15)}&#8451;</h3>
        </div>
      </div>
    </div>
    <div id="wData" className={`container-fluid ${expanded ? '': 'd-none'}`}>
      <table class="table table-striped table-dark transparent">
        <tbody>
          <tr>
            <th scope="row">Description</th>
            <td> {weather.weather[0].main}, {weather.weather[0].description}</td>
          </tr>
          <tr>
            <th scope="row">Wind</th>
            <td>{weather.wind.speed} m/s</td>
          </tr>
          <tr>
            <th scope="row">Humidity</th>
            <td>{weather.main.humidity}%</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Weather;
