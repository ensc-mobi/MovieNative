import Movie from "./movie.model";

const rootEndpoint = "https://enscmovie.azurewebsites.net/api";

// Movie data fields, as returned by the API
interface MovieData {
  id: number;
  title: string;
  // JSON dates are actually strings, not JavaScript dates
  // Example : "1984-03-13T00:00:00"
  releaseDate: string;
  genre: string;
  price: number;
  rating: string;
}

class MovieService {
  // Retrieve all movies
  getAll(): Promise<Array<Movie>> {
    // Fetch API for all movies, then transform the returned JSON data
    return fetch(rootEndpoint + "/MoviesApi").then((response) =>
      response.json().then((moviesData) => this.createMovies(moviesData))
    );
  }

  // Convert an array of JSON data to an array  of Movie objects
  private createMovies(moviesData: Array<MovieData>): Array<Movie> {
    // Apply the same function to each element of the array
    return moviesData.map((movieData) => this.createMovie(movieData));
  }

  // Convert JSON data for a movie into a Movie object
  private createMovie(movieData: MovieData): Movie {
    return new Movie(
      movieData.id,
      movieData.title,
      movieData.releaseDate,
      movieData.genre,
      movieData.price,
      movieData.rating
    );
  }
}

export default new MovieService();
