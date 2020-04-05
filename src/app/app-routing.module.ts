import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifComponent } from './gif/components';
import { CanActivateGuard } from './guards/can-activate.guard';

const routes: Routes = [
  {
    path: 'todo',
    loadChildren: () => import('./todos/todos.module').then(m => m.ToDosModule)
  },
  {
    path: 'gif',
    component: GifComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: '**',
    redirectTo: '/todo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }