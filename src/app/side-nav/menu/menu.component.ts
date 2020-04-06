import { Component, OnInit, EventEmitter } from '@angular/core';
import { of } from 'rxjs';

import { LongPollService } from '../../services/long-poll/long-poll.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public readonly toggleOnline$: EventEmitter<boolean> = new EventEmitter();
  public readonly toggleLongPolling$: EventEmitter<boolean> = new EventEmitter();
  public readonly onlineStatus$ = this.longPollService.getOnlineStatus();
  private remoteStatus = { status: false };
  private dummyonlineStatus$ = of(this.remoteStatus);


  constructor(
    private longPollService: LongPollService
  ) {
    this.longPollService.dummyOnline = this.dummyonlineStatus$;
  }

  ngOnInit() {
    this.toggleLongPolling$.subscribe(val => {
      if (val) {
        this.longPollService.startLongPolling();
      } else {
        this.longPollService.stopLongPolling();
      }
    });

    this.toggleOnline$.subscribe(val => this.remoteStatus.status = val);
  }

}
