import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchComponent } from './components/search/search.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';


export const routes: Routes = [
  {
    path: "",
    component: SearchComponent,
    pathMatch: "full"
  },
  {
    path: "movies/:id",
    component: DetailMovieComponent,
    pathMatch: "full"
  },
  { path: "**", component: NotFoundComponent, pathMatch: "full" }
];

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
