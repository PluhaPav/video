import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LogoModule } from '../logo/logo.module';
import { SearchModule } from '../search/search.module';
import { SingleItemModule } from '../single-item/single-item.module';
import { routes, AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    AppRoutingModule,
    RouterModule.forRoot(routes),
    CommonModule,
    LogoModule,
    SearchModule,
    SingleItemModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
