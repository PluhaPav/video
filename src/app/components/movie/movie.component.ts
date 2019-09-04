import { Component, OnInit, Input } from '@angular/core';
import { IMovies } from '../../interfaces/movies';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() item: IMovies;

  constructor() { }

  ngOnInit() { }

}
