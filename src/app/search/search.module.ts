import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchPipe } from './pipe/search.pipe';
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [SearchComponent, SearchPipe],
  imports: [
    CommonModule,FormsModule
  ],
  providers: [SearchPipe],
  exports: [SearchComponent]
})
export class SearchModule { }
