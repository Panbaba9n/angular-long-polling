import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, map, debounceTime, switchMap } from 'rxjs/operators';

import { MessagesService } from '../../services/messages/messages.service';
import { Message } from '../../shared/models/message.model';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  public readonly search = new FormControl('');
  // public messages$: Observable<Message[]>;
  public messages: Array<Message>;

  constructor(
    private messagesService: MessagesService,
    private ref: ChangeDetectorRef,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.search.valueChanges.pipe(
      debounceTime(500),
      map(value => value.trim()),
      filter(value => value.length > 1),
      switchMap(value => this.messagesService.searchMessages(value))
    ).subscribe(res => {

      // For purpose to demonstrane change detection.
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this.ngZone.run(() => {
            this.messages = res;
          });

          /* instead of this.ngZone.run() can be used ChangeDetectorRef
            this.messages = res;
            this.ref.detectChanges();
           */
        }, 50);
      });
    });

    /* Common realization looks like:
      <div>
        <ul>
          <li *ngFor="let message of messages$ | async; trackBy: trackByMessages">
            {{message.text}}
          </li>
        </ul>
      </div>

      this.messages$ = this.search.valueChanges.pipe(
        debounceTime(500),
        map(value => value.trim()),
        filter(value => value.length > 1),
        switchMap(value => this.messagesService.searchMessages(value))
      );

     */
  }

  trackByMessages(index: number, message: Message): number {
    return message.id;
  }

}
