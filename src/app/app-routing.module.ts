import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./containers/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'numbers',
    loadChildren: () => import('./containers/numbers/numbers.module').then(m => m.NumbersModule),
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
