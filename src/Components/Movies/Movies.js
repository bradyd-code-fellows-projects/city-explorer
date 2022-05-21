import React from 'react';
import '../Movies/Movies.css'
import { Image, ListGroup } from 'react-bootstrap';

class Movies extends React.Component {

  render() {
    let moviesInfo = this.props.movies;
    let moviesArr = moviesInfo.map((movie, idx) => {
      return <ListGroup key={idx} id="moviesList">
        {movie.posterpath &&
          <Image
            src={movie.posterpath}
            alt={movie.title}
          />
        }

        <ListGroup.Item>{movie.title}</ListGroup.Item>
        <ListGroup.Item>{movie.overview}</ListGroup.Item>
        <ListGroup.Item>{movie.releasedOn}</ListGroup.Item>
      </ListGroup>
    })
    return moviesArr;
  }
}

export default Movies;