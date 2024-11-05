/* export interface IMovie {
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
} */

export interface ITitleArguments {
  id?: string | undefined;
  category: string;
  page?: number;
}

export interface ITitle {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}

export interface IResponse<T> {
  results: T;
  total_pages: number | undefined;
}

interface IGenre {
  id: number;
  name: string;
}

export interface IResponseGenres {
  genres: IGenre[];
}

export interface IItem {
  poster_path: string;
  title: string | undefined;
  vote_average: number;
  id: number;
}

export interface ISwitchButtonProps {
  flag: string | null;
  onChange: (
    event: React.MouseEvent<HTMLElement>,
    newFlag: string | null
  ) => void;
}

export interface ICount {
  count: number | undefined;
  page: number | undefined;
  onChange: any;
}

export interface IResponseTitleByID {
  title: string;
  poster_path: string;
  overview: string;
  genres: IGenre[];
}

export interface ITitleByGenre {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}
