import React, { useState, useEffect } from 'react'
import WeatherForecastDay from './WeatherForecastDay.js'
import './WeatherForecast.css'
import axios from 'axios'

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false)
  let [forecast, setForecast] = useState(null)

  function handleResponse(response) {
    setForecast(response.data.daily)
    setLoaded(true)
  }

  useEffect(() => {
    setLoaded(false)
  }, [props.coordinates])

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              )
            } else {
              return <></>
            }
          })}
        </div>
      </div>
    )
  } else {
    let apiKey = `50c2acd53349fabd54f52b93c8650d37`
    let lat = props.coordinates.lat
    let lon = props.coordinates.lon
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse)

    return null
  }
}
