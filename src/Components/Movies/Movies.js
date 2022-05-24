import React from 'react';
import '../Movies/Movies.css'
import { Container, Carousel } from 'react-bootstrap';

class Movies extends React.Component {

  render() {
    let moviesInfo = this.props.movies;
    let moviesArr = moviesInfo.map((movie, idx) => {
      return (
        <Carousel.Item key={idx}>
          <img
            className='carousel-image'
            src={movie.image_url}
            alt={movie.title}
          />
          <Carousel.Caption id="carousel-caption">
            <h3>{movie.title}</h3>
            <h4>Released on: {movie.releasedOn}</h4>
            <h4>Summary: {movie.overview}</h4>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })
    return (
      <>
        <Container id="Carousel-container">
          <Carousel>
            {moviesArr}
          </Carousel>
        </Container>
      </>
    )
  }
}

export default Movies;