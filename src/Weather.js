import React from 'react'
import './Weather.css'

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
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
      <h1>New York</h1>
      <ul>
        <li>Wednesday 7:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="imagefix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="crear"
              className="float-start"
            />
            <div className="float-start">
              <span className="temperature">8</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Percipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 15km/h</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
