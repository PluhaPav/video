import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LogoModule } from '../logo/logo.module';
import { SearchModule } from '../search/search.module';
import { DetailMovieModule } from '../detail-movie/detail-movie.module';
import { routes, AppRoutingModule } from '../../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    AppRoutingModule,
    RouterModule.forRoot(routes),
    CommonModule,
    LogoModule,
    SearchModule,
    DetailMovieModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
