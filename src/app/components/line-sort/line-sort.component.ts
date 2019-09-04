import { Component, OnInit, DoCheck } from '@angular/core';
import { ListService } from '../../service/list/list-service.service';

@Component({
  selector: 'app-line-sort',
  templateUrl: './line-sort.component.html',
  styleUrls: ['./line-sort.component.scss']
})
export class LineSortComponent implements OnInit, DoCheck {

  public quantityFound: number = 0;
  private release: Element;
  private rating: Element;
  
  constructor(
    private listSevice: ListService
  ) { }

  ngOnInit() {
    document.addEventListener("DOMContentLoaded", () => {
      this.release = document.querySelector('.lineSort__release');
      this.rating = document.querySelector('.lineSort__rating');
    });
    this.quantityFound = this.listSevice.getQuantityItem();
  }

  ngDoCheck(): void {
    this.quantityFound = this.listSevice.getQuantityItem();
  }

  onClickRelease() {
    if (!this.release.classList.contains('lineSort__release--active')) {
      this.rating.classList.remove('lineSort__rating--active');
      this.release.classList.add('lineSort__release--active');
    }
    this.listSevice.setSortBy('release_date');
    console.log(this.listSevice.getSortBy(), 'onClickRelease');
  }

  onClickRating() {
    if (!this.rating.classList.contains('lineSort__rating--active')) {
      this.release.classList.remove('lineSort__release--active');
      this.rating.classList.add('lineSort__rating--active');
    }
    this.listSevice.setSortBy('vote_average');
    console.log(this.listSevice.getSortBy(), 'onClickRating');
  }
}
