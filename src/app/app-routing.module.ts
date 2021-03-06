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
    path: 'messages',
    loadChildren: () => import('./containers/messages/messages.module').then(m => m.MessagesModule),
  },
  {
    path: 'conversations',
    loadChildren: () => import('./containers/conversations/conversations.module').then(m => m.ConversationsModule),
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
