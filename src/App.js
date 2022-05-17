import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Form, Button, ListGroup } from 'react-bootstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      lat: '',
      lon: ''
    }
  }

  handleCitySubmit = async (e) => {
    e.preventDefault();
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.city}&format=json`;
    let cityInfo = await axios.get(url);
    this.setState({
      lat: cityInfo.data[0].lat,
      lon: cityInfo.data[0].lon,
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

        <Form onSubmit={this.handleCitySubmit}>
          <fieldset htmlFor="cityName">Which city would you like information about?
            <Form.Group className="mb-3">
              <br />
              <Form.Label htmlFor="cityName"></Form.Label>
              <Form.Control type="text" id="cityName" placeholder="e.g. Denver" onChange={this.cityChange}></Form.Control>
              <Button type="submit" variant="info" size="lg">Explore!</Button>
            </Form.Group>
          </fieldset>

        </Form>

        <ListGroup>
          <ListGroup.Item variant="primary">{this.state.city}</ListGroup.Item>
          <ListGroup.Item variant="success">Latitude: {this.state.lat}</ListGroup.Item>
          <ListGroup.Item variant="info">Longitude: {this.state.lon}</ListGroup.Item>
        </ListGroup>
      </>
    );
  }
}

export default App;
