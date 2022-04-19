// Model class representing a movie
export default class Movie {
  releaseDate: Date;

  // a property with the same name is automatically associated to each public argument
  constructor(
    public id: number,
    public title: string,
    releaseDateData: string,
    public genre: string,
    public price: number,
    public rating: string
  ) {
    // Conversion from string data to a JavaScript date
    this.releaseDate = new Date(releaseDateData);
  }
}
