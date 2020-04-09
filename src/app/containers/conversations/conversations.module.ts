import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ConversationsRoutingModule } from './conversations-routing.module';
import { ConversationsComponent } from './conversations.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [ConversationsComponent],
  imports: [
    CommonModule,
    ConversationsRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ConversationsModule { }
