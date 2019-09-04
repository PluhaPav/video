import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MovieModule } from '../movie/movie.module';



@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    MovieModule
  ],
  exports: [MoviesComponent]
})
export class MoviesModule { }
