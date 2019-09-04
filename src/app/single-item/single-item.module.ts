import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleItemComponent } from './single-item.component';
import { LoaderModule } from '../loader/loader.module';



@NgModule({
  declarations: [SingleItemComponent],
  imports: [
    CommonModule,
    LoaderModule
  ],
  exports: [SingleItemComponent]
})
export class SingleItemModule { }
