import React from 'react';
import '../Weather/Weather.css'
import { ListGroup } from 'react-bootstrap';

class Weather extends React.Component {

  render() {
    let weatherInfo = this.props.weather;

    let weatherInfoArr = weatherInfo.map( (day, idx) => {
      return <ListGroup.Item key={idx}>
        Forecast for {day.date}:
        Low temperature: {day.low},
        High temperature: {day.high}
        with {day.description}</ListGroup.Item>
    })
    return (
      <>
      {weatherInfoArr}
        {/* <ListGroup>
          {this.props.showWeather && <>
          <ListGroup.Item id="date">{this.props.weather[0].date}:</ListGroup.Item>
          <ListGroup.Item id="description">{this.props.weather[0].description}</ListGroup.Item>
          <ListGroup.Item id="low">{this.props.weather[0].low}</ListGroup.Item>
          <ListGroup.Item id="date">{this.props.weather[1].date}:</ListGroup.Item>
          <ListGroup.Item id="description">{this.props.weather[1].description}</ListGroup.Item>
          <ListGroup.Item id="date">{this.props.weather[2].date}:</ListGroup.Item>
          <ListGroup.Item id="description">{this.props.weather[2].description}</ListGroup.Item>
          </>}
        </ListGroup> */}
      </>
    )
  }
}

export default Weather;