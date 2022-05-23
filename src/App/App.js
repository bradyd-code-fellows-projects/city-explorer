import React from 'react';
import Weather from '../Components/Weather/Weather.js'
import Movies from '../Components/Movies/Movies.js'
import WeatherDay from '../Components/Weather/WeatherDay.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Alert, Form, Button, ListGroup, Image, Table } from 'react-bootstrap';

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
      showWeather: false,
      moviesDisplaying: false,
      movies: [],
      weatherIsDisplaying: false,
      latLonIsDisplaying: false,
      weatherModalIsDisplaying: false,
      SelectedDay: {}
    }
  }

  handleCitySubmit = async (e) => {
    e.preventDefault();
    try {
      let city_nameUrl = (`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.city_name}&format=json`);
      let city_nameInfo = await axios.get(city_nameUrl);

      let weatherURL = (`${process.env.REACT_APP_SERVER}/weather?city=${this.state.city_name}&lat=${city_nameInfo.data[0].lat}&lon=${city_nameInfo.data[0].lon}`);
      let weatherInfo = await axios.get(weatherURL);

      let moviesURL = (`${process.env.REACT_APP_SERVER}/movies?city_name=${this.state.city_name}`);
      let movieInfo = await axios.get(moviesURL);

      this.setState({
        lat: city_nameInfo.data[0].lat,
        lon: city_nameInfo.data[0].lon,
        mapIsDisplaying: true,
        error: false,
        weather: weatherInfo.data,
        showWeather: true,
        movies: movieInfo.data,
        moviesDisplaying: true,
        weatherIsDisplaying: true,
        latLonIsDisplaying: true
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

  openWeatherModalHandler = (date, low, high, description, icon) => {
    console.log('foobar');
    // let dayWeather = {
    //   weatherModalIsDisplaying: true,
    //   date: date,
    //   low: low,
    //   high: high,
    //   forecast: description,
    //   icon: icon
    // }
    // console.log(dayWeather);
    // this.setState({
    //   weatherModalIsDisplaying: true,
    //   SelectedDay: dayWeather
    // })
  }

  closeWeatherModalHandler = () => {
    this.setState({
      weatherModalIsDisplaying: false
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
            {this.state.latLonIsDisplaying && <ListGroup id="lat-lon">
              <ListGroup.Item variant="primary" id="thisCity">{this.state.city_name}</ListGroup.Item>
              <ListGroup.Item variant="success" id="thisLat">Latitude: {this.state.lat}</ListGroup.Item>
              <ListGroup.Item variant="info" id="thisLon">Longitude: {this.state.lon}</ListGroup.Item>
            </ListGroup>}

            {this.state.weatherIsDisplaying &&
              <Table id="weatherTable">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Low Temp</th>
                    <th>High Temp</th>
                    <th>Forecast</th>
                  </tr>
                </thead>
                <tbody>
                  <Weather
                    weather={this.state.weather}
                  />
                </tbody>
              </Table>
            }
            <WeatherDay
            weatherModalIsDisplaying={this.state.weatherModalIsDisplaying}
            SelectedDay={this.state.SelectedDay}
            closeWeatherModalHandler={this.state.closeWeatherModalHandler}
            />

            {this.state.moviesDisplaying && 
            <Movies moviesDisplaying={this.state.moviesDisplaying} movies={this.state.movies} />
            }

            {this.state.mapIsDisplaying &&
              <div id="map">
                <Image id="cityMap" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=11`} alt={this.state.city_name}></Image>
              </div>}
          </>)
        }
      </>
    );
  }
}

export default App;
