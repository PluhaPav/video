import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { SingleItemComponent } from './single-item/single-item.component';


export const routes: Routes = [
  {
    path: "",
    component: SearchComponent,
    pathMatch: "full"
  },
  {
    path: "movies/:id",
    component: SingleItemComponent,
    pathMatch: "full"
  },
  { path: "**", component: NotFoundComponent, pathMatch: "full" }
];

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
