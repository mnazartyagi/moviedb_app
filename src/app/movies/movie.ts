export interface Movie {
     adult : boolean,
   backdrop_path : string,
   budget : number,
   genres: {
      id: number,
      name: string
    }[],
   genre_ids : number,
   homepage: string,
   overview : string,
   id : number,
   imdb_id : string,
   original_language : string,
   original_title : string,
   ovierview : string,
   popularity : number,
   poster_path : string,
   production_companies: {
      id: number,
      name: string
    }[],
   production_countries: {
      iso_3166_1: string,
      name: string
    }[],
   release_date : string,
   revenue : number,
   runtime : number,
   spoken_languages: {
      iso_3166_1: string,
      name: string
    }[],
   status : string,
   title : string,
   tagline : string,
   video : boolean,
   vote_average : number,
   vote_count : number
}
