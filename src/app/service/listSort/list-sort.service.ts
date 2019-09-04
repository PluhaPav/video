import { Injectable } from '@angular/core';
import { IMovies } from 'src/app/interfaces/movies';
import { first } from 'rxjs/operators';
import { ListService } from '../list/list-service.service';

@Injectable({
  providedIn: 'root'
})
export class ListSortService {

  constructor(private listService: ListService) { }

  getSortList(arrayItems: IMovies[]): IMovies[] {
    switch (this.listService.getSortBy()) {
      case 'release_date':
        arrayItems.sort((firstItem, nextItem) => {
          return this.sortItem(firstItem.release_date, nextItem.release_date);
        });
        break;
      case 'vote_average':
        arrayItems.sort((firstItem, nextItem) => {
          return this.sortItem(firstItem.vote_average, nextItem.vote_average);
        });
        break;

    }
    return arrayItems;
  }

  private sortItem(firstItem: string | number, nextItem: string | number): number {
    let resultSort: number;
    if (firstItem || nextItem) {
      const oneDateConvert = (typeof (firstItem) === 'string')
        ? new Date(firstItem)
        : firstItem;
      const twoDateConvert = (typeof (nextItem) === 'string')
        ? new Date(nextItem)
        : nextItem;
      resultSort = this.getCompareItem(oneDateConvert, twoDateConvert);
    } else {
      resultSort = 0;
    }
    return resultSort;
  }

  private getCompareItem(firstItem: string | number | Date, nextItem: string | number | Date): number {
    return firstItem > nextItem
      ? -1
      : firstItem < nextItem
        ? 1
        : 0;
  }
}
