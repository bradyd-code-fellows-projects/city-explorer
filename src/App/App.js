import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Form, Button, ListGroup, Image } from 'react-bootstrap';

import '../App/App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      lat: '',
      lon: '',
      mapIsDisplaying: false,
      mapSrc: '',
    }
  }

  handleCitySubmit = async (e) => {
    e.preventDefault();
    let cityUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.city}&format=json`;
    let cityInfo = await axios.get(cityUrl);
    this.setState({
      lat: cityInfo.data[0].lat,
      lon: cityInfo.data[0].lon,
      mapIsDisplaying: true
    });
  }

  cityChange = (e) => {
    this.setState({
      cityInfo: [],
      city: e.target.value,
    });
  }

  render() {

    return (
      <>

        <h1>City Explorer</h1>

        <Form id="cityForm" onSubmit={this.handleCitySubmit}>
          <fieldset htmlFor="cityName">
            <legend htmlFor="cityName">Which city would you like information about?</legend>
            <Form.Group className="mb-3">
              <br />
              <Form.Label htmlFor="cityName"></Form.Label>
              <Form.Control type="text" id="cityName" placeholder="e.g. Denver" onChange={this.cityChange}></Form.Control>
              <Button id="formButton" type="submit" variant="info" size="lg">Explore!</Button>
            </Form.Group>
          </fieldset>

        </Form>

        <ListGroup id="lat-lon">
          <ListGroup.Item variant="primary" id="thisCity">{this.state.city}</ListGroup.Item>
          <ListGroup.Item variant="success" id="thisLat">Latitude: {this.state.lat}</ListGroup.Item>
          <ListGroup.Item variant="info" id="thisLon">Longitude: {this.state.lon}</ListGroup.Item>
        </ListGroup>
        
        <div id="map">
        {this.state.mapIsDisplaying && <Image id="cityMap" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=11`} alt={this.state.city}></Image>}
        </div>

      </>
    );
  }
}


export default App;
