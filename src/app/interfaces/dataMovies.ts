import { IMovies } from './movies';

export interface IDataMovies {
    data: IMovies;
    total: number;
    offset: number;
    limit: number;
}
