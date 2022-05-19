import React from 'react';
import '../Weather/Weather.css'
import { ListGroup } from 'react-bootstrap';

class Weather extends React.Component {

  render() {
    let weatherInfo = this.props.weather;

    let weatherInfoArr = weatherInfo.map((day, idx) => {
      return <ListGroup.Item key={idx}>
        Forecast for {day.date}:
        Low temperature: {day.low},
        High temperature: {day.high} with {day.description}</ListGroup.Item>
    })
    return (
      <>
        {weatherInfoArr}
      </>
    )
  }
}

export default Weather;