import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams } from 'selenium-webdriver/http';
import { HttpClient, HttpParams } from "@angular/common/http";
import { catchError, tap, timeout } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { IDataMovies } from 'src/app/interfaces/dataMovies';
import { IMovies } from 'src/app/interfaces/movies';
import { LoaderService } from '../loader/loader.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private urlApi: string = "http://react-cdp-api.herokuapp.com/movies";
  private limit: number = 20;
  private sortBy: string = "release_date";
  private searchBy: string = "title";
  private sortOrder: string = "asc";
  private quantityItem: number = 0;

  constructor(private http: HttpClient, private loader: LoaderService) { }

  getItems(searchValue?: string, sort?: string): Observable<string | IDataMovies[]> {
    let params;
    searchValue = (searchValue !== undefined)
      ? searchValue
      : '';
    if (searchValue.length > 0) {
      params = new HttpParams()
        .set("limit", this.limit.toString())
        .set("sortBy", this.sortBy.toString())
        .set("sortOrder", this.sortOrder.toString())
        .set("search", searchValue)
        .set("searchBy", this.searchBy.toString());
    } else {
      params = new HttpParams()
        .set("limit", this.limit.toString())
        .set("sortBy", this.sortBy.toString())
        .set("sortOrder", this.sortOrder.toString());
    }
    return this.http.get<IDataMovies[]>(this.urlApi, { params }).pipe(
      timeout(1100),
      tap(() => {
        this.loader.setVisible(true);
      }),
      catchError(err => {
        return throwError("Error thrown from " + err);
      })
    );
  }

  getItem(id: number): Observable<string | IMovies> {
    return this.http.get<IMovies>(this.urlApi + '/' + id).pipe(
      tap(() => {
        this.loader.setVisible(true);
      }),
      catchError(err => {
        return throwError("Error thrown from " + err);
      })
    );
  }

  setQuantityItem(quantity: number): void {
    this.quantityItem = quantity;
  }

  getQuantityItem(): number {
    return this.quantityItem;
  }

  setSortBy(sort: string): void {
    if (sort.length > 0) {
      this.sortBy = sort;
    }
  }

  setSearchBy(sort: string): void {
    if (sort.length > 0) {
      this.searchBy = sort;
    }
  }
  getSortBy(): string {
    return this.sortBy;
  }
}
