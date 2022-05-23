import React from 'react';
import '../Weather/Weather.css'

class Weather extends React.Component {

activateWeatherModal = () => {
  this.props.openWeatherModalHandler(this.props.date, this.props.low, this.props.high, this.props.description, this.props.icon);
}

  render() {
    let weatherInfo = this.props.weather;

    let weatherInfoArr = weatherInfo.map((day, idx) => {
      return (
        <tr key={idx}>
          <td key={1}>{day.date}</td>
          <td key={2}>{day.low}</td>
          <td key={3}>{day.high}</td>
          <td key={4}>{day.description}</td>
          <td key={5} onClick={this.activateWeatherModal}>Details</td>
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
