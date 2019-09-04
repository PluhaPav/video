import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailMovieComponent } from './detail-movie.component';
import { LoaderModule } from '../loader/loader.module';



@NgModule({
  declarations: [DetailMovieComponent],
  imports: [
    CommonModule,
    LoaderModule
  ],
  exports: [DetailMovieComponent]
})
export class DetailMovieModule { }
