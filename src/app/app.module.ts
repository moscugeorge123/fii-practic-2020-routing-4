import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { GifModule } from './gif/gif.module';
import { CanActivateGuard } from './guards/can-activate.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    GifModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    CanActivateGuard
  ]
})
export class AppModule { }
