export interface ITitleArguments {
  id?: string;
  category?: string;
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

export interface ITitleBySearch {
  id: number;
  media_type: string;
  title?: string;
  name?: string;
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

interface IProductionCountries {
  iso_3166_1: string;
  name: string;
}

export interface IResponseGenres {
  genres: IGenre[];
}

export interface IItem {
  poster_path: string;
  title: string | undefined;
  vote_average: number;
  id: string;
}

export interface ISwitchButtonProps {
  flag: FlagType;
  onChange: (event: React.MouseEvent<HTMLElement>, newFlag: FlagType) => void;
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
  production_countries: IProductionCountries[];
}

export interface ITitleByGenre {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}

export interface IBodyPost {
  media_type: string;
  media_id: string;
  favorite?: boolean;
  watchlist?: boolean;
}

export interface IResponseCheckStatus {
  favorite: boolean;
  id: number;
  rated: boolean;
  watchlist: boolean;
}

export type FlagType = 'movie' | 'tv';

export type TabNameType = 'Top' | 'Genres' | 'Favorite' | 'Watchlist';
