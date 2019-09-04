import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { LineSortModule } from './line-sort/line-sort.module';
import { ItemsModule } from './items/items.module';
import { HttpClientModule } from '@angular/common/http';
import { LoaderModule } from './loader/loader.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    ItemsModule,
    LineSortModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
