import React, { Component } from "react";
import { Text } from "react-native";
import { StyleSheet, FlatList } from "react-native";
import Movie from "../services/movie.model";

interface MovieListProps {
  movies: Array<Movie>;
}

export default class MovieList extends Component<MovieListProps, {}> {
  render() {
    return (
      <FlatList<Movie>
        style={styles.container}
        data={this.props.movies}
        keyExtractor={(movie) => movie.id.toString()}
        renderItem={({ item }: { item: Movie }) => (
          <Text>
            {item.title} ({item.releaseDate.getFullYear()})
          </Text>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
});
