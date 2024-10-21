export interface IMovie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
}

export interface ITVShow {
  id: number;
  name: string;
  overview: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
}

export interface IResponse<T> {
  results: T;
}

export interface IItem {
  poster_path: string;
  title: string;
  vote_average: number;
}
