import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MovieList from "../components/MovieList";
import Movie from "../services/movie.model";
import movieService from "../services/movie.service";

interface MovieScreenState {
  movies: Array<Movie>;
}

export default class MovieScreen extends Component<{}, MovieScreenState> {
  state: MovieScreenState = {
    movies: [],
  };

  loadMovies = () => {
    // Load all movies
    movieService.getAll().then((movies) => {
      this.setState({ movies });
    });
  };

  componentDidMount() {
    // Trigger movie loading as soon as component is ready
    this.loadMovies();
  }

  render() {
    return (
      <View style={styles.container}>
        <MovieList movies={this.state.movies} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
