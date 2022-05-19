import React from 'react';
import '../Movies/Movies.css'
import { Image, ListGroup } from 'react-bootstrap';

class Movies extends React.Component {

  render() {
    let moviesInfo = this.props.movies;
    let moviesArr = moviesInfo.map((movie, idx) => {
      return <ListGroup key={idx} id="moviesList">
        <ListGroup.Item>{movie.title}</ListGroup.Item>
        <ListGroup.Item>{movie.overview}</ListGroup.Item>
        <ListGroup.Item>{movie.releasedOn}</ListGroup.Item>
        <Image src={movie.posterpath}></Image>
      </ListGroup>
    })
    return moviesArr;
  }
}

export default Movies;