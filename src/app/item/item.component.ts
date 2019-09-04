import { Component, OnInit, Input } from '@angular/core';
import { IMovies } from '../interfaces/movies';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: IMovies;

  constructor() { }

  ngOnInit() { }

}
