import React from 'react';
import '../Weather/Weather.css'
import { ListGroup, Table } from 'react-bootstrap';

class Weather extends React.Component {


  render() {
    let weatherInfo = this.props.weather;

    let weatherInfoArr = weatherInfo.map((day, idx) => {
      return(
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Low Temp</th>
              <th>High Temp</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr key={idx}>
              <td key={1}>{day.date}</td>
              <td key={2}>{day.low}</td>
              <td key={3}>{day.high}</td>
              <td key={4}>{day.description}</td>
            </tr>
          </tbody>
        </Table>
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

//day.date
//day.low
//day.high
//day.description