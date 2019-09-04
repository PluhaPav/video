import { NgModule, OnDestroy, DoCheck } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ListService } from '../service/list/list-service.service';
import { SubscriptionLike } from 'rxjs';
import { IDataMovies } from '../interfaces/dataMovies';
import { IMovies } from '../interfaces/movies';
import { SearchPipe } from '../search/pipe/search.pipe';
import { LoaderService } from '../service/loader/loader.service';
import { ListSortService } from '../service/listSort/list-sort.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit, OnDestroy, DoCheck {

  private subscriptions: SubscriptionLike[] = [];
  private arrayItemsDefault: IMovies[] = [];
  private DATA: string = 'data';
  public arrayItems: IMovies[] = [];
  public doubleArrayItems: IMovies[] = [];

  constructor(
    private listItems: ListService,
    private searchPipe: SearchPipe,
    private listSort: ListSortService
  ) { }

  ngOnInit() {
    this.init();
  }

  ngDoCheck(): void {
    const searchItems = this.searchPipe.getSearchArray();
    this.arrayItems =
      (searchItems[this.DATA] !== undefined)
        ? searchItems[this.DATA]
        : this.arrayItemsDefault;
    this.arrayItems = this.listSort.getSortList(this.arrayItems);
    this.listItems.setQuantityItem(this.arrayItems.length);
  }
  ngOnDestroy() {
    if (this.subscriptions && this.subscriptions.length > 0) {
      this.subscriptions.forEach(subscrip => subscrip.unsubscribe());
    }
  }


  private init(): void {
    this.subscriptions.push(this.getSubscriptionItems());
  }

  private getSubscriptionItems(): SubscriptionLike {
    return this.listItems.getItems().subscribe(
      (data: IDataMovies[]) => {
        this.setDataItems(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  private setDataItems(data: IDataMovies[]): void {
    this.arrayItemsDefault = data[this.DATA];
    this.arrayItems = this.arrayItemsDefault;
    this.listItems.setQuantityItem(this.arrayItems.length);
  }
}
