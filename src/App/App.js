import React from 'react';
import Weather from '../Components/Weather/Weather.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Alert, Form, Button, ListGroup, Image } from 'react-bootstrap';

import '../App/App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city_name: '',
      lat: '',
      lon: '',
      mapIsDisplaying: false,
      error: false,
      weather: [],
      showWeather: false
    }
  }

  // let cityWeatherData = await axios.get(`${weatherURL}?key=${process.env.WEATHER_API_KEY}&lat=${request.query.latitude}&lon=${request.query.longitude}`);

  // let weatherData = await Axios.get(`https://api.weatherbit.io/v2.0/forecast/daily/weather?latitude=${cityData.data[0].lat}&longitude=${cityData.data[0].lon}`);

  handleCitySubmit = async (e) => {
    e.preventDefault();
    try {
      let city_nameUrl = (`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.city_name}&format=json`);

      
      let city_nameInfo = await axios.get(city_nameUrl);
      let weatherURL = (`${process.env.REACT_APP_SERVER}/weather?city=${this.state.city_name}&lat=${city_nameInfo.data[0].lat}&lon=${city_nameInfo.data[0].lon}`);
      let weatherInfo = await axios.get(weatherURL);

      this.setState({
        lat: city_nameInfo.data[0].lat,
        lon: city_nameInfo.data[0].lon,
        mapIsDisplaying: true,
        error: false,
        weather: weatherInfo.data,
        showWeather: true
      });
    } catch (error) {
      console.log('Error: ', error);
      console.log('Error message: ', error.message);
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
  }

  cityChange = (e) => {
    this.setState({
      cityInfo: [],
      city_name: e.target.value,
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

        {this.state.error ?
          <Alert variant='danger' id="errorAlert">
            <Alert.Heading>Error</Alert.Heading>
            <p>{this.state.errorMessage}</p>
          </Alert> :
          (<>
            <ListGroup id="lat-lon">
              <ListGroup.Item variant="primary" id="thisCity">{this.state.city_name}</ListGroup.Item>
              <ListGroup.Item variant="success" id="thisLat">Latitude: {this.state.lat}</ListGroup.Item>
              <ListGroup.Item variant="info" id="thisLon">Longitude: {this.state.lon}</ListGroup.Item>
              <Weather showWeather={this.state.showWeather} weather={this.state.weather} />
            </ListGroup>


            <div id="map">
              {this.state.mapIsDisplaying && <Image id="cityMap" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=11`} alt={this.state.city_name}></Image>}
            </div>
          </>)
        }
      </>
    );
  }
}

export default App;
