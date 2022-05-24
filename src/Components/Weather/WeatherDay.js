import React from 'react';
import '../Weather/Weather.css'
import { Modal, Button } from 'react-bootstrap';
import '../Weather/Weather.js'

class WeatherDay extends React.Component {

  render() {
    return (
      <>
        <Modal
          show={this.props.weatherModalIsDisplaying}
          onHide={this.props.closeWeatherModalHandler}
          >
          <Modal.Header closeButton>
            <Modal.Title>Forecast for {this.props.selectedDay.date}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.selectedDay.icon} alt={this.props.selectedDay.description} />
            <p>Low: {this.props.selectedDay.low}</p>
            <p>High: {this.props.selectedDay.high}</p>
            <p>Forecast: {this.props.selectedDay.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.closeWeatherModalHandler}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default WeatherDay;