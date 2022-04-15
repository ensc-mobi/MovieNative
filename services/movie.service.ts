const rootEndpoint = "https://enscmovie.azurewebsites.net/api";

// Properties of a movie object
export interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  genre: string;
  price: number;
  rating: string;
}

class MovieService {
  // Retrieve all movies
  getAll(): Promise<Array<Movie>> {
    // Fetch API and directly return the JSON data
    return fetch(rootEndpoint + "/MoviesApi").then((response) =>
      response.json()
    );
  }
}

export default new MovieService();
