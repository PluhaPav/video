import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import { ItemModule } from '../item/item.module';



@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    ItemModule
  ],
  exports: [ItemsComponent]
})
export class ItemsModule { }
