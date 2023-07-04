import { useState, useEffect } from 'react'
import WeatherDisplay from './Components/WeatherDisplay'
import SearchBar from './Components/SearchBar'


function App() {

  const APIKey = `efd7622c756c6775aaba18e07f166853`
  const [city, setCity] = useState('New York')
  const [lat, setLat] = useState('40.730610')
  const [lon, setLon] = useState('-73.935242')
  const [info, setInfo] = useState([])

  useEffect(() => {
    const searchCities = async () => {
      const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIKey}`)
      const data = await res.json()
      setLat(data[0]?.lat)
      setLon(data[0]?.lon)
    }

    const fetchWeather = async () => {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&appid=${APIKey}`)
      const data = await res.json()
     setInfo(data)
    }
    searchCities()
    fetchWeather()

  }, [city, APIKey, lat, lon])

  console.log(info)


  return (
    <div className="container">
      <h1> Weather App </h1>
      <SearchBar setCity={setCity} city={city} />
      <WeatherDisplay info={info} />
    </div>
  )
}



export default App