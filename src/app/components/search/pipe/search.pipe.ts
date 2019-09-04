import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { SubscriptionLike } from 'rxjs';
import { ListService } from 'src/app/service/list/list-service.service';
import { IDataMovies } from 'src/app/interfaces/dataMovies';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform, OnDestroy {

  private subscription: SubscriptionLike[] = [];
  private searchArray: IDataMovies[] = [];
  private DATA: string = 'data';

  constructor(private arrayItems: ListService) { }

  public changeSearchValue(changedValue: string) {
    if (changedValue === undefined) {
      changedValue = "";
    }
    if (changedValue.length > 0) {
      this.subscription.push(this.getSubscriptionItems(changedValue));
    }
  }
  public getSearchArray(): IDataMovies[] {
    return this.searchArray;
  }

  private getSubscriptionItems(changedValue: string): SubscriptionLike {
    return this.arrayItems
      .getItems(changedValue)
      .subscribe((data: IDataMovies[]) => {
        this.searchArray = data;
        this.arrayItems.setQuantityItem(data[this.DATA].length);
      });
  }

  transform(arrayItem: IDataMovies[]): IDataMovies[] {
    return (this.searchArray = arrayItem);
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.forEach(element => {
        element.unsubscribe();
        element = null;
      });
    }
  }
}
