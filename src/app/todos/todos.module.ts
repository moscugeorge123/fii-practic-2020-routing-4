import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ListComponent } from './components';
import { ToDoService } from './services';
import { ToDosComponent } from './todos.component';
import { ToDosRoutingModule } from './todos-routing.module';

@NgModule({
  declarations: [
    ListComponent,
    ToDosComponent
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    ToDosRoutingModule
  ],
  providers: [
    ToDoService
  ]
})
export class ToDosModule { }
