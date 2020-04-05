import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToDosComponent } from './todos.component';

const routes: Routes = [
  {
    path: ':todoType',
    component: ToDosComponent
  },
  {
    path: '**',
    redirectTo: 'all',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDosRoutingModule { }