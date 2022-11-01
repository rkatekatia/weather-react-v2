import './App.css'
import Weather from './Weather'

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather app</h1>
        <Weather />
        <p>
          <a
            href="https://github.com/rkatekatia/weather-react-v2"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code{' '}
          </a>
          by Catherine Kariakina
        </p>
      </div>
    </div>
  )
}
