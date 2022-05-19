import React from 'react';
import '../Weather/Weather.css'
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class Weather extends React.Component {

  render() {
    return (
      <>
        <ListGroup>
          {this.props.showWeather && <>
          <ListGroup.Item id="date">{this.props.weather[0].date}:</ListGroup.Item>
          <ListGroup.Item id="description">{this.props.weather[0].description}</ListGroup.Item>
          <ListGroup.Item id="date">{this.props.weather[1].date}:</ListGroup.Item>
          <ListGroup.Item id="description">{this.props.weather[1].description}</ListGroup.Item>
          <ListGroup.Item id="date">{this.props.weather[2].date}:</ListGroup.Item>
          <ListGroup.Item id="description">{this.props.weather[2].description}</ListGroup.Item>
          </>}
        </ListGroup>
      </>
    )
  }
}

export default Weather;