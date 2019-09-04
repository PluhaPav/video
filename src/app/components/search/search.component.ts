import { Component, OnInit } from '@angular/core';
import { fromEvent, timer, throwError } from 'rxjs';
import { debounce, catchError, tap } from 'rxjs/operators';
import { SearchPipe } from './pipe/search.pipe';
import { MySearchEvent } from '../../interfaces/mySearchEvent';
import { ListService } from '../../service/list/list-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public valueSearch: string;
  public searchInput: Element;
  private buttonTitle: Element;
  private buttonGenre: Element;

  constructor(private searchPipe: SearchPipe, private listService: ListService) { }

  ngOnInit() {
    this.searchInput = document.querySelector('.search__input');
    this.searchKeyUp(this.searchInput);
    console.log('on init search');
  }
  
  onClickSearchButton(event: Event) {
    event.preventDefault();
    this.searchPipe.changeSearchValue(this.valueSearch);
    console.log('searchClick');
  }

  sortByTitle() {
    this.getDomElement();
    if (!this.buttonTitle.classList.contains('search__orderByTitle--active')) {
      this.buttonTitle.classList.add('search__orderByTitle--active');
      this.buttonGenre.classList.remove('search__orderByGenre--active');
    }
    this.listService.setSearchBy("title");
  }
  sortByGenre() {
    this.getDomElement();
    if (!this.buttonGenre.classList.contains('search__orderByGenre--active')) {
      this.buttonTitle.classList.remove('search__orderByTitle--active');
      this.buttonGenre.classList.add('search__orderByGenre--active');
    }
    this.listService.setSearchBy("genre");
  }

  searchKeyUp(searchInput: Element) {
    const source = fromEvent(searchInput, "keyup");
    const example = source.pipe(
      debounce(() => timer(1000)),
      catchError((error: string) => throwError(`I caught: ${error}`)),
      tap((event: MySearchEvent) => {
        this.searchPipe.changeSearchValue(event.target.value);
      })
    );
    const subscribe = example.subscribe(null, error => {
      console.warn(error);
    });
  }

  private getDomElement(){
    this.buttonTitle = document.querySelector('.search__orderByTitle');
    this.buttonGenre = document.querySelector('.search__orderByGenre');
  }
}
