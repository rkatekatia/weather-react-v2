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
            />
          </div>
          <div className="col-3">
            <input type="Submit" value="Search" className="btn btn-danger" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 7:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXSxjbo6M168gOwJYnqlVcBkaksJFYMN4_nQ&usqp=CAU"
            alt="crear"
          />
          8°C
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
