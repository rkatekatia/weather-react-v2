import React, { useState } from 'react'
import axios from 'axios'
import './Weather.css'
import WeatherInfo from './WeatherInfo.js'

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false })
  const [city, setCity] = useState(props.defaultCity)

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
    })
  }

  function search() {
    const apiKey = 'c28bc0f185bfd19006fd6c1547853316'
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)
  }

  function handleSubmit(event) {
    event.preventDefault()
    search()
  }

  function handleChangeCity(event) {
    setCity(event.target.value)
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleChangeCity}
              />
            </div>
            <div className="col-3">
              <input
                type="Submit"
                value="Search"
                className="btn btn-danger w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    )
  } else {
    search()
    return 'Loading...'
  }
}
