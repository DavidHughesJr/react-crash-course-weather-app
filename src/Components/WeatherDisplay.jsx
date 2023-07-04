function WeatherDisplay({info}) {


    return (
        <div className="content">
            <h3> {info.name? info.name : 'City'} </h3>
            <div className="image">
                <img src={`http://openweathermap.org/img/w/${info?.weather?.[0]?.icon}.png`} alt="weather icon" />
            </div>
            <h2>  {info?.main?.temp ? info.main.temp : 'Degree'} °F </h2>
            <p> {info.weather?.[0]?.description ? info.weather[0]?.description : 'description'} </p>
        </div>
    )
}

export default WeatherDisplay