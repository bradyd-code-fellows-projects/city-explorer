import React from 'react';
import '../Weather/Weather.css'
import '../Weather/WeatherDay.js'

class Weather extends React.Component {

render() {
  let weatherInfo = this.props.weather;

  let weatherInfoArr = weatherInfo.map((day, idx) => {
    return (
      <tr key={idx}>
        <td id="date" key={1}>{day.date}</td>
        <td key={2}>{day.low}</td>
        <td key={3}>{day.high}</td>
        <td key={4}>{day.description}</td>
        <td key={5} onClick={() => this.props.openWeatherModalHandler(day)}>Details</td>
      </tr>
    )
  })
  return (
    <>
      {weatherInfoArr}
    </>
  )
}
}

export default Weather;
