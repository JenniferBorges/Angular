import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphySearchListComponent } from './giphy-search-list.component';

@NgModule({
  imports: [ CommonModule ],
  exports: [ GiphySearchListComponent ],
  declarations: [ GiphySearchListComponent ]
})
export class GiphySearchListModule { }
