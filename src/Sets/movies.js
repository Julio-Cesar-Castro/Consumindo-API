import React, { Component } from "react";
import axios from "axios";

const FilmesApi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=66fe19142291ef00acda95e39111e73b&language=en-US&page=1",
});

export default class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const resposta = await FilmesApi.get();
    const allMovies = resposta.data.results.map((item) => {
      return {
        ...item,
        images: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
      };
    });
    this.setState({
      movies: allMovies,
    });
    console.log(allMovies);
  };

  render() {
    return (
      <div>
        {this.state.movies.map((item, index) => (
          <>
            <ul key={index}>
              <li>{item.original_title}</li>
              <li>{item.overview}</li>
            </ul>
            <figure>
              <img src={item.images} alt="" />
            </figure>
          </>
        ))}
      </div>
    );
  }
}
