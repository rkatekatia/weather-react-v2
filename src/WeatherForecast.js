import React from 'react'
import WeatherIcon from './WeatherIcon.js'
import './WeatherForecast.css'
import axios from 'axios'

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data)
  }

  let apiKey = `50c2acd53349fabd54f52b93c8650d37`
  let lat = props.coordinates.lat
  let lon = props.coordinates.lon
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

  axios.get(apiUrl).then(handleResponse)

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecastTemp">
            <span className="WeatherForexasTemp-max">19° </span>
            <span className="WeatherForexasTemp-mim">10°</span>
          </div>
        </div>
      </div>
    </div>
  )
}
