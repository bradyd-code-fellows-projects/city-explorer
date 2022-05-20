import React from 'react';
import '../Weather/Weather.css'
import { Carousel, Modal, Button } from 'react-bootstrap';
import '../Weather/Weather.js'

class WeatherDay extends React.Component {

  render() {

    let weatherInfo = this.props.weather;

    return (
      <>
        <Modal>
          <Modal.Header>
            <Modal.Title>Forecast for {this.props.date}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src="" alt=""/>
            <p></p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default WeatherDay;