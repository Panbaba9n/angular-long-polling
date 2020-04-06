import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumbersRoutingModule } from './numbers-routing.module';
import { NumbersComponent } from './numbers.component';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [NumbersComponent],
  imports: [
    CommonModule,
    NumbersRoutingModule,
    MatListModule,
    MatSlideToggleModule,
    MatDividerModule
  ]
})
export class NumbersModule { }
