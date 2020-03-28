import { NgModule } from "@angular/core";

import { GifComponent } from './components';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    GifComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    GifComponent
  ]
})
export class GifModule {}