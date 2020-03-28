import { NgModule } from "@angular/core";

import { GifComponent } from './components';

@NgModule({
  declarations: [
    GifComponent
  ],
  exports: [
    GifComponent
  ]
})
export class GifModule {}