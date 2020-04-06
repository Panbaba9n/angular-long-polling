import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NumbersComponent } from './numbers.component';


const routes: Routes = [
  {
    path: '',
    component: NumbersComponent,
    children: [],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NumbersRoutingModule { }
