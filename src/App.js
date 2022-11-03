import './App.css'
import Weather from './Weather'

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather app</h1>
        <Weather defaultCity="Copenhagen" />
        <footer>
          <a
            href="https://github.com/rkatekatia/weather-react-v2"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code{' '}
          </a>
          by Catherine Kariakina
        </footer>
      </div>
    </div>
  )
}
