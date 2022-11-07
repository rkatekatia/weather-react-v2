import React from 'react'
import WeatherIcon from './WeatherIcon.js'
import './WeatherForecast.css'

export default function WeatherForecast(props) {
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
