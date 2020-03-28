import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NumberOfTodosPipe } from './pipes';
import { HeaderComponent } from './components';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    NumberOfTodosPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NumberOfTodosPipe,
    ReactiveFormsModule,
    HeaderComponent
  ]
})
export class SharedModule { }
