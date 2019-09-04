import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { LineSortModule } from './components/line-sort/line-sort.module';
import { HttpClientModule } from '@angular/common/http';
import { MoviesModule } from './components/movies/movies.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    MoviesModule,
    LineSortModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
