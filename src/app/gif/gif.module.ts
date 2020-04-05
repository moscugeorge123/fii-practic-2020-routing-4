import { NgModule } from "@angular/core";

import { GifComponent } from './components';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    GifComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    GifComponent
  ]
})
export class GifModule {}