import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifComponent } from './gif/components';

const routes: Routes = [
  {
    path: 'todo',
    loadChildren: () => import('./todos/todos.module').then(m => m.ToDosModule)
  },
  {
    path: 'gif',
    component: GifComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }